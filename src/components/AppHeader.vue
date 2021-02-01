<template>
  <div>
    <v-app-bar app dark class="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <router-link to="/" tag="span" style="cursor: pointer">
        <v-app-bar-title v-text="'MyApp'"></v-app-bar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(item, i) in menuItems" :key="i" :to="item.route" text>
          <v-icon left v-html="item.icon"></v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
      <v-list>
        <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      menuItems: [
        {
          icon: 'visibility',
          title: 'Читать',
          route: '/books'
        },
        {
          icon: 'extension',
          title: 'Учить слова',
          route: '/words'
        },
        {
          icon: 'account_circle',
          title: 'Мой кабинет',
          route: '/profile'
        },
        {
          icon: 'exit_to_app',
          title: 'Выйти',
          route: '/logout'
        },
        {
          icon: 'input',
          title: 'Войти',
          route: '/login'
        },
        {
          icon: 'lock_open',
          title: 'Зарегистрироваться',
          route: '/signup'
        }
      ]
    }
  }
  // computed: {
  //   menuItems() {
  //     return {}
  //   }
  // }
}
</script>

<style scoped>

</style>