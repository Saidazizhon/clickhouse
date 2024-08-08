import React from 'react';

const Banner = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-blue-200 dark:bg-gray-700">
      <div className="text-left dark:text-white">
        <h1 className="text-3xl font-bold">Мебель на любой вкус!</h1>
        <p>Выбор мебели, которая подойдёт именно вам.</p>
        <button className="mt-4 bg-orange-500 text-white p-2 rounded">Перейти в каталог</button>
      </div>
      <div className="w-1/2">
        <img src="https://s3-alpha-sig.figma.com/img/02c2/e8db/166bfb2b02c671bf41c9fa3777f82445?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nxZYK1GB99et5tJoq8McFON5sLUCxX-7potMYzipQcM60TJn~dJq50~ETkhWTY0uL9TZ6wbC2Ml7XT4S2HhyRjNJJlkxVq6amYsrkwjAv7iwe-16MBw0HeRfsA2Z3h-N5FC0gvihkMbsfziRP41cToi9-TBkMtjf2Y5cTzVf0-cZRWpvVyiOpwKlj47uFh~pl0KqFBflmPrhfA7N2~voDLwi-lnIpjsfSsC~RSBtVMwhYnnpZntkY90s2JuaY6-5FPBAJd--x5fuGNFSVea-aoQkIQCsi3tQC1Pua11Jvs9agUfiMiVb3sntmvtB9NEoW1m~5NJRRNx-cDE-BEluvw__" alt="Banner" className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Banner;
