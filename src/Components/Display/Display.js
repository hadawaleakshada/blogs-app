import './Display.css'
function Display() {
    return (
        <div className="body">
            <div className="navigation">
                <div className="nav1">Blogs</div>
                <div className="nav2">
                    <span className='navright'>Akshada Hadawale</span>
                    <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    <span className='logout'>Logout</span>
                </div>
            </div>
            {/* full section tag  */}
            <div className='fullsection'>
                <div className='section21'>
                    <div className='blogs'>Blogs</div>
                    <div className='b1'> <i class="fa fa-plus-circle icon1" aria-hidden="true"></i>
                        <span> create new post</span></div>
                </div>
                <div className='p'>Publish your passions,your way...</div>
                <hr className='hr' />
                <div className='section22'>
                    <div className='hello'>Hello World</div>
                    < div className='create'>Created By<em className='s1'>akshadahadawale@gmail.com</em></div>
                    <div className='create'>Created At<em className='s1'>22nd feb,2025</em></div>
                    <hr />
                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with
                        desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with
                        desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div className='buttons'>
                        <button className='b1'><i class="fa fa-thumbs-up thumb" aria-hidden="true"></i> 0</button>
                        <button className='b2'><i class="fa fa-thumbs-down thumb" aria-hidden="true"></i> 0</button>
                    </div>

                </div>




            </div>
        </div>
    )
}
export default Display;          