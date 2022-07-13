import React from 'react';
import './Post.css';




function Post() {
  return (
    <div className='Postpage'>
        <div className='post_container'>
            <form className='post_form'>
                <div className='part1'>
                    <div>
                        <p>Post Title</p>
                        <input type='text' className='input' placeholder='Title' />
                    </div>
                    <div> Post Type下拉

                    </div>
                    <div>Category下拉</div>
                </div>
                <div className='part2'>
                    <p>Description</p>
                    <input type='text' className='input' placeholder='Please enter detail information.' />
                    <div className='p2-1'>
                        {/* <input type="file" onChange={this.fileSelectHandler} /> */}
                        <input type="file" accept='image/png, image/jpeg' />
                    </div>
                    <div className='p2-2'>
                        <div>
                            <label>
                                <input type='checkbox' />
                                On-campus address
                            </label>
                            <input type='text' className='input' placeholder='e.g. Davis Library (On-campus)' />
                            <label>
                                <input type='checkbox' />
                                Off-campus address
                            </label>
                            <input type='text' className='input' placeholder='e.g. Lark Apt (Off-campus)' />
                        </div>
                        <div>
                            <p>postal code</p>
                            <input type='text' className='input' />                            
                        </div>
                    </div>
                </div>
                <div className='part3'>
                    <p>Contact Information</p>
                    <div className='p3-1'>
                        <p>Email</p>
                        <input type='text' className='input'  placeholder='Your contact email' />  
                    </div>
                    <div className='p3-2'>
                        <div className='p3-2-1'>
                            <label>
                                <input type='checkbox' />
                                Show my phone number
                            </label>
                            <label>
                                <input type='checkbox' />
                                Can be reached by phone calls
                            </label>
                            <label>
                                <input type='checkbox' />
                                Can be reached by text
                            </label>
                        </div>
                        <div className='p3-2-2'>
                            <div>
                                <p>Phone Number</p>
                                <input type='text' className='input' />
                            </div>
                            <div>
                                <p>Contact Name</p>
                                <input type='text' className='input' />
                            </div>
                        </div>  
                    </div>
 
                </div>
            
            </form>
        </div>
    </div>
  )
}

export default Post