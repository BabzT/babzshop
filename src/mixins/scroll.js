export default{
    methods:{
        // for topsellers
        scrollRight1(){
            let content = document.querySelector('.toppicks')
            content.scrollLeft += 200
        },
        scrollLeft1(){
            let content = document.querySelector('.toppicks')
            content.scrollLeft -=200
        },
        // for trending products
        scrollRight2(){
            let content = document.querySelector('.electronics')
            content.scrollLeft += 200
        },
        scrollLeft2(){
            let content = document.querySelector('.electronics')
            content.scrollLeft -=200
        },
    }
}