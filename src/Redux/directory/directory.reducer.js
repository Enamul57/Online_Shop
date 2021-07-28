const INITIAL_STATE = {
       sections:[
        {title:"Hats",id:1,imageURL:"https://i.ibb.co/ZYW3VTp/brown-brim.png",linkURL:'hats'},
        {title:"Jackets",id:2,imageURL:"https://i.ibb.co/XzcwL5s/black-shearling.png",linkURL :""},
        {title:"Sneakers",id:3,imageURL:"https://i.ibb.co/fMTV342/nike-brown.png",linkURL :""},
        {title:"Man",id:4,imageURL:"https://i.ibb.co/RvwnBL8/pink-shirt.png",size:"large",linkURL :""},
        {title:"Women",id:5,imageURL:"https://i.ibb.co/4W2DGKm/floral-blouse.png",size:"large",linkURL :""}
        ]
 
}

const directoryReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        default: 
            return state;
    }
}
export default directoryReducer;