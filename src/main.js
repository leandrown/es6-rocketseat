class App {
   constructor() {
      this.repositories = [];
      this.formElement = document.getElementById('repo-form');
      this.registerHandlers();
   }

   registerHandlers() {
      this.formElement.onsubmit = event => this.addRepository(event);
   }

   addRepository(event) {
      event.preventDefault();

      this.repositories.push({
         name: 'rocketseat.com.br',
         description: 'Tire a sua idéia do papel e dê vida à sua Startup!',
         avatar_url: 'http://avatars0.githubusercontent.com/u/28929274?v=4',
         html_url: 'http://github.com/rocketseat/rocketseat.com.br'
      });

      console.log(this.repositories);
   }
}

new App();
