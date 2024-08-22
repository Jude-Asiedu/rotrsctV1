import React from 'react'
import { useParams } from 'react-router-dom';


const Blogdetails = () => {
   const {id} =   useParams();
  return (
    <div className='container mt-5'>
        <div className="row  mt-5 ">
            <div className="col sm-11 col-md-7 col-lg-8 mx-auto">

            <h3 className='mb-3'> { id  === 'blog1'? 'BLOG ONE ' : 'BLOG TWO' } </h3>    
        
                <p className='text-justify'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi velit quasi, voluptatum dignissimos reprehenderit nesciunt expedita eius, fugiat enim sunt eveniet quod cupiditate voluptas quidem alias aperiam et recusandae autem odit? Ratione nobis perferendis tempore neque dolores consequatur tenetur ullam sapiente illum molestiae, minima molestias provident maxime! Temporibus ut reiciendis consequatur dolores? Quod nostrum necessitatibus voluptatum, neque sed ex unde ut et rerum fugit, facilis earum temporibus voluptas labore quia asperiores odit harum illo dolorem non, sit animi! Eligendi quos officiis neque odit consequatur dignissimos porro aliquam est? Impedit debitis culpa aspernatur dignissimos iste obcaecati repudiandae nemo commodi distinctio veniam!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi velit quasi, voluptatum dignissimos reprehenderit nesciunt expedita eius, fugiat enim sunt eveniet quod cupiditate voluptas quidem alias aperiam et recusandae autem odit? Ratione nobis perferendis tempore neque dolores consequatur tenetur ullam sapiente illum molestiae, minima molestias provident maxime! Temporibus ut reiciendis consequatur dolores? Quod nostrum necessitatibus voluptatum, neque sed ex unde ut et rerum fugit, facilis earum temporibus voluptas labore quia asperiores odit harum illo dolorem non, sit animi! Eligendi quos officiis neque odit consequatur dignissimos porro aliquam est? Impedit debitis culpa aspernatur dignissimos iste obcaecati repudiandae nemo commodi distinctio veniam!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi velit quasi, voluptatum dignissimos reprehenderit nesciunt expedita eius, fugiat enim sunt eveniet quod cupiditate voluptas quidem alias aperiam et recusandae autem odit? Ratione nobis perferendis tempore neque dolores consequatur tenetur ullam sapiente illum molestiae, minima molestias provident maxime! Temporibus ut reiciendis consequatur dolores? Quod nostrum necessitatibus voluptatum, neque sed ex unde ut et rerum fugit, facilis earum temporibus voluptas labore quia asperiores odit harum illo dolorem non, sit animi! Eligendi quos officiis neque odit consequatur dignissimos porro aliquam est? Impedit debitis culpa aspernatur dignissimos iste obcaecati repudiandae nemo commodi distinctio veniam!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi velit quasi, voluptatum dignissimos reprehenderit nesciunt expedita eius, fugiat enim sunt eveniet quod cupiditate voluptas quidem alias aperiam et recusandae autem odit? Ratione nobis perferendis tempore neque dolores consequatur tenetur ullam sapiente illum molestiae, minima molestias provident maxime! Temporibus ut reiciendis consequatur dolores? Quod nostrum necessitatibus voluptatum, neque sed ex unde ut et rerum fugit, facilis earum temporibus voluptas labore quia asperiores odit harum illo dolorem non, sit animi! Eligendi quos officiis neque odit consequatur dignissimos porro aliquam est? Impedit debitis culpa aspernatur dignissimos iste obcaecati repudiandae nemo commodi distinctio veniam!

                </p>
            </div>

        </div>
    
    </div>
  )
}

export default Blogdetails
