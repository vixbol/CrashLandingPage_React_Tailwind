import MovieCard from "./MovieCard";
import { moviesData } from "./MoviesData";

const Trending = () => {
	return (
		<>
			<h3 className="border-b border-primary mt-12 mb-6 pb-4">Trending</h3>
			<div className="grid grid-cols-4 gap-10 mb-12">
				{moviesData.map((movie, index) =>
				<MovieCard key={index} movie={movie}/>)}
			</div>
			<div className="flex justify-center ">
				<button className="btn hover:scale-125 transition ease-out duration-500">Load More</button>
			</div>
			<div className="text-center mt-10">
				<p>Sản phẩm này không responsive, xin lỗi vì sự bất tiện này.
				Xin chân thành cảm ơn bạn đẫ ghé thăm trang của mình!
				Copyright @<a href="https://www.facebook.com/100010504325448/" target="_blank" className="font-bold">Vixbol</a></p>
			</div>
		</>
	);
};

export default Trending;