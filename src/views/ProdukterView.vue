<template>
    <div>
        <div class="sengeHeader"> Her vises tidligere produkter, som vi har produceret. </div>


        <div class="gallery"> 
          <div class="imageBox" v-for="image in images" :key="image">
            <div class="productContainer">
            <router-link :to="{ name: 'produktSide', params:{ id : image.id }}">
              <div class="cardBox">     
                <div class="galleryImage">
                 <img :src="image.src" :alt="image.title" /> 
                </div>
                <div class="overlayContainer">
                  <div class="overlay"></div>
                  <p class="galleryImageTitle"> image title title title title title title title </p>
                </div>
              </div>
            </router-link>
            </div>
          </div>
        </div>
     </div> 

</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          id: 1,
          src: "https://cdn.pixabay.com/photo/2018/10/28/12/37/bedroom-3778695_1280.jpg",
          title: "Image 1",
        },
        {
          id: 2,
          src: "https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940169_1280.jpg",
          title: "Image 2",
        },
        {
          id: 3,
          src: "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg",
          title: "Image 3",
        },
        {
          id: 4,
          src: "https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523_1280.jpg",
          title: "Image 4",
        },
        {
          id: 5,
          src: "https://cdn.pixabay.com/photo/2021/11/08/00/30/bedroom-6778193_1280.jpg",
          title: "Image 5",
        },
        {
          id: 6,
          src: "https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940168_1280.jpg",
          title: "Image 6",
        },
        {
          id: 7,
          src: "https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_1280.jpg",
          title: "Image 7",
        },
        {
          id: 8,
          src: "https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg",
          title: "Image 8",
        },
        {
          id: 9,
          src: "https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183_1280.jpg",
          title: "Image 9",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sengeHeader {
    height: 200px;
    width: 100%;
    font-family: $TitleFont;
    font-size: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 70px 10% 130px 10%;
  }

a:link {
    text-decoration: none;
}
.cardBox {
    height: 450px;
    width: 400px;
    background-color: rgb(240, 240, 240);
    filter: drop-shadow(5px 5px 4px rgb(132, 115, 103));
    border-radius: 5px;
    border-style: solid 3px;
    border-color: rgb(218, 218, 218);
}
.galleryImage {
    height: 100%;
    width: auto;
    background-color: #fff;
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;

     img {
        object-fit: cover;
        width:auto;
        height: 100%;
        overflow: hidden;
    }
 }
.productContainer {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: $Tertiary;
}

.productContainer:hover .overlay {
  opacity: 0.7;
}

.galleryImageTitle {
  color: $Black;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: 0;
  transition: .5s ease;
}

.productContainer:hover .galleryImageTitle {
  opacity: 1;
}

</style>