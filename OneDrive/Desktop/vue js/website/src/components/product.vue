<template>
<!-- Start Single Tab -->
<div class="tab-pane fade show active" role="tabpanel" style=" margin-right: -34px ;display: flex;
                   flex-wrap: wrap;">
    <div class="tab-single">
        <div class="row" style="margin-right: -298px;">
            <div class="col-xl-3 col-lg-4 col-md-4 col-12" style="  flex: 14 0 25%;
                          max-width: 49%;">
                <div class="single-product">
                    <div class="product-img">
                        <a href="product-details.html">
                            <img :src=" product.thumbnail">
                    
                        </a>
                        <div class="button-head">
                            <div class="product-action">
                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add
                                        to
                                        Wishlist</span></a>
                                <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to
                                        Compare</span></a>
                            </div>
                            <div class="product-action-2">
                                <a title="Add to cart" href="#">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div class="product-content">
                        <h3><a href="product-details.html">{{ product.title }} </a></h3>
                        <div class="product-price">
                            <span>${{ product.price }}.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

    
<script>
export default {
    name: "productitem-",
    props: ['product']

}
</script>

    
<style>
.single-product {

    position: relative;
    margin-left: 35px;
    padding: 0px;
    margin-right: 19px;

}
</style>
