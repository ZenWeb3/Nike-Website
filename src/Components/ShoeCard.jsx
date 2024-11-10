
const ShoeCard = ({imageUrl, changeShoeBtn, bigShoeImage}) => {
    const handleClick = () => {
        if (bigShoeImage !== imageUrl.bigShoe ) {
            changeShoeBtn(imageUrl.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl 
                    ${bigShoeImage === imageUrl ?
                        "border-coral-red" : "border-transparent"
                    }
                    max-sm:flex-1 cursor-pointer
                    `}
                    onClick={handleClick}
                    >
                    <div className="flex justify-center items-center bg-center 
                    bg-cover bg-card rounded-xl sm:h-40 sm:w-40px max-sm:p-4">
                        <img src={imageUrl.thumbnail}
                            className="object-contain w-[127px] h-[103px]"
                        />
                    </div>
    </div>
  )
}

export default ShoeCard