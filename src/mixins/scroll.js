export default{
    methods:{
        // for topsellers
        scrollRight1(){
            let content = document.querySelector('.toppicks')
            content.scrollLeft += 200
            console.log('scroll')
        },
        scrollLeft1(){
            let content = document.querySelector('.toppicks')
            content.scrollLeft -=200
            console.log('scroll')
        },
        // for trending products
        scrollRight2(){
            let content = document.querySelector('.electronics')
            content.scrollLeft += 200
            console.log('scroll')
        },
        scrollLeft2(){
            let content = document.querySelector('.electronics')
            content.scrollLeft -=200
            console.log('scroll2')
        },
    }
}