Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
        delimiters: ['[[', ']]'],
        el: '#app',
        data: {
            message: 'Hello Vue!' + new Date().toLocaleString(),
            seen: true,
            groceryList: [
                {id: 0, text: 'Vegetables'},
                {id: 1, text: 'Cheese'},
                {id: 2, text: 'Whatever else humans are supposed to eat'}
            ]
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }
        }
    }
)
