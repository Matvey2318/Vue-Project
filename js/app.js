let list = Vue.component('list', {
    template: "#product-list",
    data: function () {
        return {products: books}
    },

});

let add = Vue.component('adding', {
    template: "#add-product"
});

let component = Vue.component('show', {
    template: "#view-product"
});

let edit = Vue.component('edit', {
    template: "#edit-product"
});

let del = Vue.component('delete', {
    template: "#delete-product"
});
let viewProduct = Vue.component('view-product',
    {
        template: '#view-product',
        data: function () {
            return {product: books[this.$route.params.product_id - 1]}
        },
    });
let editProduct = Vue.component('edit-product',
    {
        template: '#edit-product',
        data: function () {
            return {product: books[this.$route.params.product_id - 1]}
        },
        methods: {
            update: function () {
                books[this.$route.params.product_id-1] = {
                    id: this.$route.params.product_id,
                    name: this.product.name,
                    description: this.product.description,
                    price: this.product.price
                }
            }
        }
    });

let deleteProduct = Vue.component('view-product',
    {
        template: '#delete-product',
        data: function () {
            return {product: books[this.$route.params.product_id - 1]}
        },
        methods: {
            del: function () {
                books.splice(this.$route.params.product_id-1,1)

                }
            }

    });

let router = new VueRouter({
    routes: [
        {path: '/list', component: list},
        {path: '/add', component: add},
        {path: '/component', component: component},
        {path: '/edit', component: edit},
        {path: '/delete/:product_id', component: deleteProduct},
        {path: '/view/:product_id', component: viewProduct},
        {path: '/edit/:product_id', component: editProduct},
    ]
});

let books = [
    {id: 1, name: 'Book1', description: 'Description of Book1', price: 100},
    {id: 2, name: 'Book2', description: 'Description of Book2', price: 200},
    {id: 3, name: 'Book3', description: 'Description of Book3', price: 300},
];


let vm = new Vue({
    el: '#app',
    router: router,
});