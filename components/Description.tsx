// import React from 'react'

interface Props {
    description: string;
  }



const Description = ({ description}:Props) => {
  console.log("Description:",description );
  return (
    <div>
        <p className="text-gray-700 text-lg leading-relaxed">
  {description}
 
</p>

    </div>
  )
}

export default Description;
