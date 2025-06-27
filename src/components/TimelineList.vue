<template>
  <div>
    <TimelineItem
      v-for="item in itensOrdenados"
      :key="item.data + '-' + item.usuario_id"
      :item="item"
      :usuario="getUsuario(item.usuario_id)"
      :livro="getLivro(item.livro_id)"
      :allUsers="usuarios"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TimelineItem from '@/components/TimelineItem.vue'

interface Usuario {
  id: number
  nome: string
  avatar: string
  estante: {
    livroId: number
    categoria: string[]
    nota?: string
  }[]
}

interface Livro {
  id: number
  titulo: string
  capa: string
}

interface Comentario {
  userId: number
  texto: string
}

interface Atividade {
  tipo: string
  usuario_id: number
  livro_id: number
  data: string
  conteudo: any
  likes: string
  comments: Comentario[]
}

const props = defineProps<{
  itens: Atividade[]
  usuarios: Usuario[]
  livros: Livro[]
}>()

function getUsuario(id: number): Usuario {
  return props.usuarios.find(u => u.id === id)!
}

function getLivro(id: number): Livro {
  return props.livros.find(l => l.id === id)!
}

const itensOrdenados = computed(() => {
  return [...props.itens].sort((a, b) => +new Date(b.data) - +new Date(a.data))
})
</script>
