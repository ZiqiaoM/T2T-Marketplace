//This page is the wishlist cart page
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState ={
    cartItems:[],
    totalQuantity:0,
    totalAmount:0
}

const addWishlist = createAsyncThunk(
    'cartSlice/addWishlist',
    async () => {
            try{
                let data = {
                    product_id: 5,
                    user_id: 1,
                  };
                const body = { data };
                await fetch("/api/addWishlist", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(body),
                    });
                    // await Router.push('/drafts');
            } catch (error) {
                console.error(error);
        }
    }
  )
  



const cartSlice = createSlice({
    name:'cart',
    initialState: initialState,

    reducers:{
        addItem(state, action){
            const newItem = action.payload
            const existingItem = state.cartItems.find(item=> item.id===newItem.id)
            state.totalQuantity++

            if(!existingItem){
                state.cartItems.push({
                    id:newItem.id,
                    // title:newItem.title,
                    post_title:newItem.post_title,
                    // image01:newItem.image01,
                    images:newItem.images,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price
                })
            
                // try{
                // const body = { data };
                // await fetch("/api/addWishlist", {
                //       method: "POST",
                //       headers: { "Content-Type": "application/json" },
                //       body: JSON.stringify(body),
                //     });
                //     // await Router.push('/drafts');
                //   } catch (error) {
                //     console.error(error);
                //   }
            }
            else{
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice)+Number(newItem.price)
            }

            state.totalAmount = state.cartItems.reduce((total,item)=>(total+Number(item.price)*Number(item.quantity)),
            //initial value should be 0
            0)
        },


        //remove items
        removeItem(state, action){
            const id=action.payload
            const existingItem = state.cartItems.find(item=>item.id===id)
            state.totalQuantity--

            if(existingItem.quantity=== 1){
                state.cartItems=state.cartItems.filter(item=>item.id!==id)
            }
            else{
                existingItem.quantity--
                existingItem.totalPrice =  Number(existingItem.totalPrice)- Number(existingItem.price)
            }
            state.totalAmount = state.cartItems.reduce((total, item)=>(
                total +Number(item.price)*Number(item.quantity)),
                0
            )
        },

        //delete items
        deleteItem(state, action){
            const id=action.payload
            const existingItem = state.cartItems.find(item=>item.id===id)
            if(existingItem){
                state.cartItems = state.cartItems.filter(item=>item.id !==id)
                state.totalQuantity= state.totalQuantity-existingItem.quantity
            }

            state.totalAmount = state.cartItems.reduce((total, item)=>(
                total +Number(item.price)*Number(item.quantity)),0
            )
        }
    },

    extraReducers: {
        [addWishlist.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.entities = payload
        },
      },
})

export const cartActions = cartSlice.actions
export default cartSlice