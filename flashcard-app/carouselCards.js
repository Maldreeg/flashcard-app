import React from 'react'
import { View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import Flashcard from './flashcard.js'

const SLIDER_WIDTH = Dimensions.get('window').width + 80
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCards = (vieweddecks) => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={vieweddecks}
        renderItem={({ item }) => (
          <Flashcard route={{ params: { frontContent: item.frontContent, backContent: item.backContent } }} />
        )}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onScrollIndexChanged={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={vieweddecks.flashcards.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  )
}

export default CarouselCards