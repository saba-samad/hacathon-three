// import React from 'react'

interface Props {
    amount: number | undefined;
    className?: string;
}
const PriceFormatter = ({ amount } : Props) => {
    const formattedPrice = new Number(amount).toLocaleString("en-us", {
        currency:"USD",
        style:"currency",
        // minimumFractionDigits: 0,
    })
  return (
    <div className="text-sm">
      {formattedPrice}
    </div>
  )
}

export default PriceFormatter
