import Evelynn from '../../assets/evelynn.jpg'
import Fizz from '../../assets/fizz.jpg'
import Jayce from '../../assets/jayce.jpg'
import Mundo from '../../assets/mundo.jpg'
import Poppy from '../../assets/poppy.jpg'

export interface Movie {
	src: string;
	title: string;
	main: string;
	runtime: string;
}

export const moviesData: Movie[] = [
	{
		src: Evelynn,
		title: 'Evelynn champ',
		main: 'Vixbol',
		runtime: '120m'
	},
	{
		src: Fizz,
		title: 'Fizz champ',
		main: 'Vixbol',
		runtime: '120m'
	},
	{
		src: Jayce,
		title: 'Jayce champ',
		main: 'Vixbol',
		runtime: '120m'
	},
	{
		src: Mundo,
		title: 'Mundo champ',
		main: 'Vixbol',
		runtime: '120m'
	},
	{
		src: Poppy,
		title: 'Poppy champ',
		main: 'Vixbol',
		runtime: '120m'
	},
]