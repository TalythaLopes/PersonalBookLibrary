<template>
  <v-card class="mb-4 px-2 py-1" :style="{ backgroundColor: '#ffeeee' }" flat>
    <!-- Cabeçalho com avatar + nome + data + nota -->
    <div class="d-flex align-start mb-2">
      <RouterLink to="/profile" custom v-slot="{ navigate }">
        <v-btn icon elevation="0" @click="navigate" style="padding: 0; min-width: auto;">
          <v-img :src="usuario.avatar" class="avatar-custom" />
        </v-btn>
      </RouterLink>

      <div class="ml-3">
        <div class="text-subtitle-1 font-weight-medium">{{ usuario.nome }}</div>
        <div class="text-caption text-grey-darken-1">{{ formatData(item.data) }}</div>
      </div>
    </div>

    <!-- Nota (abaixo do nome, como na referência) -->
    <v-rating
      v-if="item.tipo === '2' && notaUsuario"
      :model-value="parseInt(notaUsuario)"
      readonly
      density="compact"
      color="#7A0017"
      background-color="grey-lighten-1"
      size="18"
      class="mt-1"
    />

    <p v-if="item.conteudo.texto" class="mt-1">{{ item.conteudo.texto }}</p>

    <v-card-text class="pt-2">
      <div class="d-flex">
        <v-img :src="livro.capa" max-width="70" class="mr-4" />

        <div>
          <h3 class="mt-2">{{ livro.titulo }}</h3>
          <p class="mb-0" style="font-style: italic; color: #444;">{{ livro.autor }}</p>

          <p v-if="item.conteudo.progresso" class="mt-6"> {{ item.conteudo.progresso }} </p>

          <p v-if="item.tipo === '3'" class="mt-1">
            <strong>Adicionou à estante</strong>
          </p>
        </div>
      </div>
    </v-card-text>

    <!-- Likes e Comentar -->
    <v-card-actions class="d-flex pa-0 mt-n3 ml-n2">
      <div class="d-flex align-center">
        <v-btn
          icon
          variant="text"
          :color="curtiu ? '#7A0017' : '#7A0017'"
          @click="curtir"
        >
          <v-icon>{{ curtiu ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
        </v-btn>
        <span class="font-weight-bold" style="color: #7A0017;">{{ quantidadeLikes }}</span>

        <v-btn
          icon
          class="ml-4"
          variant="text"
          color="#7A0017"
          @click="mostrarComentarios = !mostrarComentarios"
        >
          <v-icon>mdi-comment-text-multiple-outline</v-icon>
        </v-btn>
        <span class="font-weight-bold" style="color: #7A0017;">{{ quantidadeComents }}</span>
      </div>
    </v-card-actions>

    <!-- Comentários Expandíveis -->
    <v-expand-transition>
      <div v-if="mostrarComentarios">
        <v-divider></v-divider>
        <v-card-text>
          <p class="font-weight-bold mb-2">Comentários:</p>

          <div v-for="(comment, index) in item.comments" :key="index" class="mb-2">
            <p class="mb-0">
              <strong>{{ getUserName(comment.userId) }}:</strong>
            </p>
            <p class="ml-2">{{ comment.texto }}</p>
          </div>

          <!-- Campo para novo comentário -->
          <v-textarea
            v-model="novoComentario"
            placeholder="Faça um comentário..."
            auto-grow
            rows="1"
            class="mt-2"
            dense
          />
          <v-btn
            :disabled="!novoComentario.trim()"
            color="#7A0017"
            size="small"
            class="mt-n2 ml-n1"
            @click="enviarComentario"
          >
            Enviar
          </v-btn>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

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
  autor: string
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
  conteudo: {
    texto?: string
    progresso?: string
    categoria?: string
  }
  likes: string
  comments: Comentario[]
}

const props = defineProps<{
  item: Atividade
  usuario: Usuario
  livro: Livro
  allUsers: Usuario[]
}>()

const mostrarComentarios = ref(false)
const novoComentario = ref('')

const notaUsuario = computed(() => {
  const estante = props.usuario.estante.find(
    (e) => e.livroId === props.livro.id
  )
  return estante?.nota || null
})

const curtiu = ref(false)
const quantidadeLikes = ref(parseInt(props.item.likes || '0'))
const quantidadeComents = computed(() => props.item.comments?.length || 0)

function getUserName(userId: number): string {
  return props.allUsers.find((u) => u.id === userId)?.nome || 'Usuário'
}

function formatData(iso: string): string {
  const data = new Date(iso)
  return data.toLocaleString('pt-BR', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  })
}

function enviarComentario() {
  if (!novoComentario.value.trim()) return

  props.item.comments.push({
    userId: props.usuario.id,
    texto: novoComentario.value.trim(),
  })
  novoComentario.value = ''
}

function curtir() {
  if (curtiu.value) {
    quantidadeLikes.value--
  } else {
    quantidadeLikes.value++
  }
  curtiu.value = !curtiu.value
}
</script>

<style scoped>
.avatar-custom {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
