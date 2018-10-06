<template>
  <div>
    <v-list>
      <v-list-tile v-for="result in results" :key="result.name">
        <v-list-tile-title>
          {{result.name}}
        </v-list-tile-title>
        <v-list-tile-action>
          <v-btn icon flat color="red" @click="deleteOne(result.id)">
            <v-icon >delete</v-icon>
          </v-btn>
        </v-list-tile-action>
        <v-list-tile-action>
          <v-btn icon flat color="blue-grey" @click="setUpdatable(result)">
            <v-icon >edit</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
    <v-form>
      <v-layout>
        <v-text-field v-model="form.name"></v-text-field>
        <v-btn @click="create">
          submit
        </v-btn>

      </v-layout>
    </v-form>
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-form>
          <v-layout>
            <v-text-field v-model="updateForm.name"></v-text-field>
            <v-btn @click="update">submit</v-btn>
          </v-layout>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Firestore from '~/api/firebase/Firestore'

export default {
  asyncData() {
    return Firestore.create()
      .readAll('samples')
      .then((res) => {
        let results = []
        if (res.docs) {
          results = res.docs.map(d => ({ ...d.data(), id: d.id }))
        }
        return { results }
      })
  },
  data: () => ({
    results: [],
    form: {
      name: ''
    },
    updateForm: {
      name: ''
    },
    dialog: false
  }),
  methods: {
    create() {
      Firestore.create()
        .create('samples', { ...this.form })
        .then(() => {
          this.form.name = ''
          this.getAll()
        })
    },
    getAll() {
      Firestore.create()
        .readAll('samples')
        .then((res) => {
          if (res.docs) {
            this.results = res.docs.map(d => d.data())
          }
        })
    },
    deleteOne(id) {
      Firestore.create()
        .delete(`samples/${id}`)
        .then((res) => {
          console.log(res)
          alert('delete successfully')
          this.getAll()
        })
    },
    update() {
      Firestore.create()
        .update(`samples/${this.updateForm.id}`, this.updateForm)
        .then((res) => {
          console.log(res)
          alert('update succesfully')
        })
    },
    setUpdatable(data) {
      this.dialog = true
      this.udpateForm = { ...data }
    }
  }
}
</script>

<style>

</style>
