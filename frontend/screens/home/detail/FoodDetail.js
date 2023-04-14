import { View, Text,ImageBackground, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, {useRef} from 'react'
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES, dummyData, icons } from '../../../constants';
import { IconButton, ItemContentCard } from '../../../components';
import { BottomSheetModalProvider, BottomSheetModal, BottomSheetFlatList } from '@gorhom/bottom-sheet'
import ItemTabs from './ItemTabs';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useRoute } from '@react-navigation/native';

const FoodDetail = ({route}) => {
    
    const navigation = useNavigation()
    const bottomSheetRef = useRef(null);
    const [isOpen, setIsOpen] = React.useState(false)
    const [selectedItem, setSelectedItem] = React.useState("")
    const[qty, setQty] = React.useState(  0)
    const [selectedOptions, setSelectedOptions] = React.useState("")
    const snapPoints = ['80%']

    const {item} = route.params;

    React.useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false,
        })
    },[]);

    // handler
    function handlerBottomSheet() {
        bottomSheetRef.current?.present();
        setIsOpen(true)
    }


    // render

    function renderTop(){
        return (
            <>
            <ImageBackground 
                source={item.image}
                resizeMode='cover'
                style={{
                    height: 250,
                    width: '100%'
                }}
            >
            <View 
                style={{
                    backgroundColor: "#000",
                    height: 250,
                    width: '100%',
                    opacity: isOpen ? 0.7 : 0.55
                }}
            />

                <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 40,
                    left: SIZES.padding,
                    right: SIZES.padding,
                    flex: 1,
                }}>
                    <IconButton 
                        icon={icons.backArrow}
                        onPress={()=>navigation.goBack()}
                        iconStyle={{
                            width: 28,
                            height: 28,
                            tintColor: COLORS.white
                        }}
                        containerStyle={{
                            width: 30,
                            height: 30
                        }}
                    />

                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 40,
                    right: SIZES.padding,
                }}>
                    <IconButton 
                        icon={icons.favorite}
                        iconStyle={{
                            tintColor: COLORS.primary,
                            marginRight: SIZES.body3
                        }}
                    />
                    <IconButton 
                        icon={icons.dots}
                        onPress={handlerBottomSheet} 
                        iconStyle={{
                            tintColor: COLORS.white,
                        }}
                    />
                </View>
                <View style={{

                        position: 'absolute',
                        top: 90,
                        left: SIZES.padding
                }}>
                    <View>
                        <Text style={{
                            fontSize: 23,
                            color:COLORS.white,
                            ...FONTS.largeTitle
                        }}>{item.title}</Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start'
                        }}>
                            <IconButton 
                                icon={icons.location}
                                iconStyle={{
                                    height: 14,
                                    width:14
                                }}
                                containerStyle={{
                                    height: 14,
                                    width:14
                                }}
                            />
                            <Text style={{
                            color:COLORS.white,
                            ...FONTS.body1,
                            marginLeft: 3
                            }}>23A, Ajanaku Tanke, Ilorin</Text>
                        </View>
                    </View>

                    <View style={{
                        flexDirection:'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}>

                    <IconButton 
                        icon={icons.star}
                        iconStyle={{
                            height: 13,
                            width: 13,
                            tintColor: "orange"
                        }}
                        containerStyle={{
                            height: 13,
                            width: 13,
                        }}
                    />
                    <Text
                        style={{
                        fontSize: 14,
                        color: COLORS.white,
                        marginTop: 4,
                        marginLeft: 2,
                        ...FONTS.h4
                        }}
                    >{item.rate_count}</Text>
                    <Text
                        style={{
                        fontSize: 12,
                        color: COLORS.light,
                        marginTop: 4,
                        marginLeft: 2,
                        ...FONTS.h4
                        }}
                    >({item.reviews_count} {item.reviews_count<2 ? "review" : "reviews" })</Text>
                </View>
                </View>

                </ImageBackground>
            </>
        )
    }

    function renderSheetContent(){
        return (
            <ScrollView>
            <View style={{flex: 1,}}>
                <View style={{backgroundColor: COLORS.white,
                                    padding: SIZES.padding
                }}>
                    <Text style={{
                        fontSize:18,
                        ...FONTS.h4
                    }}>Add New Item</Text>

                    {/* Item Card */}
                    {renderItemCard(item)}
                </View>
                 
                {/* Sizes & Price */}
                {renderSizesAndPrice(item)}

                {/* Other Options */}
                {renderOptions(item)}

                {/* Notes */}
                {renderNotes()}

                {/* Add to cart buttton */}
                {renderAddToCartButton()}
            </View>
        </ScrollView>
        )
    }

    function renderAddToCartButton() {
        return (
            <TouchableOpacity 
                disabled={selectedItem!==""?false: true}
                style={{
                justifyContent: "space-between",
                alignItems: 'center',
                // width: '100%',
                marginHorizontal: SIZES.padding,
                paddingBottom: SIZES.padding *2
            }}>
                <View style={{
                    flexDirection:"row",
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: selectedItem!==""?COLORS.primary:COLORS.light,
                    borderRadius: SIZES.padding * 0.7,
                    padding: SIZES.padding,
                    width: '100%',
                    marginHorizontal: SIZES.padding
                }}>
                    <View>
                        <Text style={{
                            color: COLORS.light,
                            ...FONTS.h4
                        }}>1 Item</Text>
                        <Text style={{
                            fontSize: 18,
                            color: COLORS.white,
                            ...FONTS.h3
                        }}>$2.9</Text>
                    </View>
                    <Text style={{
                        fontSize: 16,
                            color: COLORS.white,
                            ...FONTS.h3
                    }}>Add to Cart</Text>
                </View>
            </TouchableOpacity>
        )
    }

    function renderNotes() {
        return (
                <View>
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems: 'center',
                        backgroundColor: COLORS.light3,
                        paddingVertical: SIZES.padding,
                        paddingHorizontal: SIZES.padding
                    }}><Text style={{
                            color: COLORS.lightGray,
                            ...FONTS.body3
                        }}>Notes</Text></View>
                    <TextInput 
                        placeholder='Type your note here!'
                        placeholderTextColor={COLORS.light}
                        cursorColor={COLORS.black}
                        style={{
                            height: 100,
                            width: '100%',
                            margin: SIZES.padding *2,
                            backgroundColor: COLORS.light3,
                            borderRadius:SIZES.padding * 0.6,
                            padding: SIZES.padding, 
                        }}
                    />
                </View>
        )
    }

    function renderOptions(item){
        return(
            <View>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems: 'center',
                    backgroundColor: COLORS.light3,
                    paddingVertical: SIZES.padding,
                    paddingHorizontal: SIZES.padding
                }}><Text style={{
                        color: COLORS.lightGray,
                        ...FONTS.body3
                    }}>Options</Text></View>

                {item.options.map((item,index)=>{
                    return (
                        <TouchableOpacity
                            key={index}
                         style={{

                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingHorizontal: SIZES.padding,
                            paddingVertical: SIZES.padding * 1.5,
                        }} onPress={()=>{
                            setSelectedOptions(item.id)
                        }}>

                            { selectedOptions==item.id ?<IconButton 
                                icon={icons.mark}
                                iconStyle={{
                                    height: 14,
                                    width: 14,
                                    
                                }}
                                containerStyle={{
                                    height: 22,
                                    width: 22,
                                    borderRadius: 11,
                                    borderColor: COLORS.primary,
                                    backgroundColor: COLORS.primary
                                }}
                            /> :
                            <IconButton 
                                icon={icons.radioEmpty}
                                iconStyle={{
                                    tintColor: COLORS.light
                                }}
                                containerStyle={{
                                    height: 22,
                                    width: 22,
                                    borderRadius: 11,
                                }}
                            />
                    }
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            flex: 1,
                            marginLeft: SIZES.padding
                        }}>
                            <Text style={{
                                ...FONTS.h4,
                                fontSize: 16
                            }}>{item.name}</Text>
                        </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
    
    function renderSizesAndPrice(item){
        return (
            <View>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems: 'center',
                    backgroundColor: COLORS.light3,
                    paddingVertical: SIZES.padding,
                    paddingHorizontal: SIZES.padding
                }}>
                    <Text style={{
                        color: COLORS.lightGray,
                        ...FONTS.body3
                    }}>Size</Text>
                    <Text style={{
                        color: COLORS.lightGray,
                        ...FONTS.body3
                    }}>Price</Text>
                </View>
                <View>
                {item?.sizes.map((item, index)=>{
                    return(
                        <ItemContentCard 
                            key={index}
                            item={item}
                            selectedItem={selectedItem}
                            onPress={()=> setSelectedItem(item.price)}
                        />
                    )
                })
                }
                </View>
            </View>
        )
    }

    function renderItemCard(item){
        return (


            <View style={{
                marginTop: SIZES.padding,
                flexDirection: 'row',
                justifyContent:"flex-start",
                alignItems: 'flex-start'
            }}>
                <Image 
                    source={item.image}
                    resizeMode='cover'
                    style={{
                        borderRadius: SIZES.padding * 0.5,
                        height: 90,
                        width: 90,
                        marginRight: SIZES.padding
                    }}
                />
                <View style={{
                    flex: 1,
                }}>
                    <Text 
                    numberOfLines={1}
                    ellipsizeMode='tail'

                    style={{
                        width: SIZES.width * 0.5,
                        fontSize:16,
                        ...FONTS.h4,
                    }}>{item.title}</Text>
                    <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <IconButton 
                                icon={icons.share}
                                iconStyle={{
                                    tintColor: COLORS.light,
                                    height: 16,
                                    width:16,
                                }}
                            />
                            <Text style={{
                                ...FONTS.body3,
                                color: COLORS.lightGray
                            }}>99+</Text>
                        </View>
                        <IconButton 
                            icon={icons.line}
                            iconStyle={{
                                    tintColor: COLORS.light,
                                    height: 16,
                                    width:16,
                            }}
                        />
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <IconButton 
                                icon={icons.like}
                                iconStyle={{
                                    tintColor: COLORS.light,
                                    height: 16,
                                    width:16,
                                }}
                            />
                            <Text style={{
                                ...FONTS.body3,
                                color: COLORS.lightGray
                            }}>56+</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flex: 1
                    }}>
                        <Text style={{
                            color: COLORS.primary,
                            fontSize: 20,
                            ...FONTS.h3
                        }}>${selectedItem!==""? selectedItem : item.sizes[0].price}</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <IconButton 
                                icon={icons.minus}
                                onPress={()=> setQty(qty - 1)}
                                disable={qty < 1 }
                                containerStyle={{
                                    height: 26,
                                    width: 26,
                                    borderRadius: 13,
                                    backgroundColor: COLORS.light3
                                }}
                                iconStyle={{
                                    tintColor: qty < 1? "gainsboro": COLORS.black,
                                    height: 14,
                                    width: 14
                                }}
                            />
                            <Text style={{
                                ...FONTS.h3,
                                fontSize: 20,
                                marginHorizontal: SIZES.padding
                            }}>{qty}</Text>
                            <IconButton 
                                icon={icons.plus}
                                onPress={()=> setQty(qty + 1)}
                                containerStyle={{
                                    height: 26,
                                    width: 26,
                                    borderRadius: 13,
                                    backgroundColor: COLORS.primary
                                }}
                                iconStyle={{
                                    tintColor: COLORS.white,
                                    height: 14,
                                    width: 14
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }

  return (
        <BottomSheetModalProvider>
            <View style={{
                    flex: 1,
                    height: SIZES.height,
            }}>
            
                {/* Top Part */}
                {renderTop()}
        
                {/* Bottom Sheet */}
                <BottomSheetModal 
                    ref={bottomSheetRef}
                    onDismiss={()=> setIsOpen(false)}
                    index={0}
                    snapPoints={snapPoints}
                    backgroundStyle={{ borderRadius: SIZES.padding2, backgroundColor: COLORS.white}}
                >
                <BottomSheetFlatList 
                    ListHeaderComponent=
                    {renderSheetContent()}
                />
                </BottomSheetModal>

                <ItemTabs item={item} />
            
            </View>
        </BottomSheetModalProvider>
  )
}

export default FoodDetail