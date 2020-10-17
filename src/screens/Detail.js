import React, { useContext, useEffect, useRef } from 'react'
import {
	View,
	Text,
	Image,
	StatusBar,
	StyleSheet,
	useWindowDimensions,
	Animated,
	Pressable,
	Linking,
	BackHandler
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { SharedElement } from 'react-navigation-shared-element'
import { colors } from '../assets/colors/colors'
import Icon from 'react-native-vector-icons/dist/Ionicons'
import * as Animatable from 'react-native-animatable'
import { ThemeContext } from '../contexts/ThemeContext'

const Detail = ({ route, navigation }) => {
	const { isDark } = useContext(ThemeContext)
	const { data } = route.params
	const scrollY = useRef(new Animated.Value(0)).current
	const width = useWindowDimensions().width
	const bottomView = useRef()
	const topRef = useRef()
	let connectButton = null
	let stackItem = null
	let arrStack = data.techStack.split(',')

	const backAction = () => {
		Promise.all([ topRef.current.fadeOut(450), bottomView.current.fadeOutDownBig(450) ]).then(() =>
			navigation.goBack()
		)
		return true
	}

	const removeWhiteSpace = (text) => {
		return text.replace(/^[ ]+/g, "")
	}

	connectButton = data.social.map((item, index) => (
		<React.Fragment key={index}>
			<ConnectButton
				name={item.name}
				isDark={isDark}
				onPress={() =>
					Linking.openURL(item.link).then((_) => {}).catch(() => {
						alert('Failed to open link')
					})}
			/>
		</React.Fragment>
	))

	stackItem = arrStack.map((item, index) => (
		<View key={index} style={styles.techContainer(isDark)}>
			<Text style={styles.techText(isDark)}>{removeWhiteSpace(item)}</Text>
		</View>
	))

	useEffect(() => {
		BackHandler.addEventListener('hardwareBackPress', backAction)

		return () => BackHandler.removeEventListener('hardwareBackPress', backAction)
	}, [])

	return (
		<React.Fragment>
			<StatusBar backgroundColor={'black'} barStyle='light-content' />
			<Animated.ScrollView
				showsVerticalScrollIndicator={false}
				style={{ flex: 1 }}
				contentContainerStyle={{
					backgroundColor: isDark ? colors.background_dark : colors.background_light
				}}
				onScroll={Animated.event([ { nativeEvent: { contentOffset: { y: scrollY } } } ], {
					useNativeDriver: true
				})}>
				<Animated.View
					style={{
						...StyleSheet.absoluteFill,
						transform: [ { translateY: Animated.multiply(scrollY, 1) }, { scale: 1 } ]
					}}>
					<SharedElement id={`item.${data.id}.photo`} style={{ width: width, height: width * 2 }}>
						<Image source={data.image} style={{ width: width, height: width * 2 }} resizeMode='cover' />
					</SharedElement>
					<Animatable.View
						ref={topRef}
						animation='fadeIn'
						duration={450}
						delay={400}
						style={{ ...StyleSheet.absoluteFillObject }}>
						<LinearGradient
							colors={[ 'transparent', 'transparent', 'transparent', 'transparent', 'black' ]}
							start={{ x: 0, y: 1 }}
							end={{ x: 0, y: 0 }}
							style={styles.linearGradient}>
							<Pressable
								onPress={() => backAction()}
								hitSlop={{ top: 16, bottom: 16, right: 16, left: 16 }}>
								<Icon name='arrow-back-outline' size={24} color={colors.background_light} />
							</Pressable>
						</LinearGradient>
					</Animatable.View>
				</Animated.View>
				<Animatable.View
					ref={bottomView}
					animation='fadeInUpBig'
					duration={450}
					delay={400}
					style={styles.bottomView(width, isDark)}>
					<Text style={styles.name(isDark)}>{data.name}</Text>
					<View style={styles.container}>
						{stackItem}
					</View>
					<View style={styles.connectContainer}>
						<Text style={styles.connectText(isDark)}>Let's Connect</Text>
						<View style={styles.lineHorizontal(isDark)} />
					</View>
					{connectButton}
				</Animatable.View>
			</Animated.ScrollView>
		</React.Fragment>
	)
}

Detail.sharedElements = (route) => {
	const { data } = route.params
	return [ `item.${data.id}.photo` ]
}

export default Detail

const ConnectButton = ({ name, onPress, isDark }) => {
	return (
		<Pressable onPress={onPress} style={styles.buttonContainer(isDark)}>
			<Text style={styles.buttonText(isDark)}>{name}</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	linearGradient: {
		...StyleSheet.absoluteFillObject,
		flex: 1,
		padding: 16
	},
	bottomView: (width, isDark) => ({
		marginTop: width * 1.5,
		padding: 16,
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		backgroundColor: isDark ? colors.background_dark : colors.background_light,
		flex: 1
	}),
	container: { alignItems: 'center', marginTop: 10, flexDirection: 'row', flex: 1, flexWrap: 'wrap' },
	techContainer: (isDark) => ({
		backgroundColor: isDark ? colors.foreground_dark : colors.foreground_light,
		paddingHorizontal: 16,
		paddingVertical: 4,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100,
		marginRight: 12,
		marginVertical: 6
	}),
	techText: (isDark) => ({ color: isDark ? colors.foreground_light : colors.foreground_dark }),
	name: (isDark) => ({
		color: isDark ? colors.background_light : colors.background_dark,
		fontSize: 24,
		fontWeight: 'bold',
		lineHeight: 28
	}),
	connectContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 26, marginBottom: 6 },
	connectText: (isDark) => ({ color: isDark ? '#90c3da' : '#5a6a86', fontSize: 14 }),
	lineHorizontal: (isDark) => ({
		height: 1,
		backgroundColor: isDark ? '#90c3da' : '#5a6a86',
		flex: 1,
		marginLeft: 8,
		marginTop: 2
	}),
	buttonContainer: (isDark) => ({
		borderRadius: 8,
		backgroundColor: isDark ? colors.foreground_dark : colors.foreground_light,
		padding: 12,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 12,
		elevation: isDark ? 0 : 1
	}),
	buttonText: (isDark) => ({ color: isDark ? colors.foreground_light : colors.foreground_dark })
})
