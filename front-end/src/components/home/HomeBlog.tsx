const Blog = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-10 py-20">
        <div className="flex flex-col items-center gap-6 w-[35rem]">
          <h1 className=" text-4xl font-extrabold">FROM OUR BLOG</h1>
          <div className="flex flex-col items-center">
            <p className=" text-[#666]">
              Commodo sociosqu venenatis cras dolor sagittis integer luctus sem
              primis
            </p>
            <p className=" text-[#666]">eget maecenas sed urna malesuada.</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div
            style={{
              position: "relative",
              backgroundImage:
                "url('https://s3-alpha-sig.figma.com/img/e480/4a70/2c395e0218c6392a48648290e32eee2f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QJtzLN7GArolqHDSCVRU0LN1ekUUKeyr790Je-we-IHdd-o0fhfqLfxCeSQCdMzGDS5AjRBD7PA4vYatc8jyTbEiCBScrsr6fGPWrXqKkMClLcqpcW~uSRf926nkmgw0TYGa-rDxUXf309W~65Pnr-rcoAlGsYGharPN-iFQdokS0NLIRtDu1iwk~mj8QGqul34tgI2GOZ7dSSnn-rQMbydPMubp7RAlAo30w3kcoqrJNJq3jIxvqSc~OW3kdSS9PpWzbCNH3u7-HOcanPGUnaLKTuSCIfhLOLE-GlxrsWeUe3wF2kcOijCAMsogqlj8p0s4nWcE0orv7382czOScw__')",
              backgroundSize: "100% 100%",
              width: "42.25rem",
              height: "27.87rem",
            }}
          >
            <div className="absolute inset-0 h-full hover:bg-gradient-to-t from-teal-500 via-transparent"></div>
          </div>
          <div className="flex flex-col gap-7 ">
            <div className="flex gap-6">
              <div
                style={{
                  position: "relative",
                  backgroundImage:
                    "url('https://s3-alpha-sig.figma.com/img/b7e4/d190/df4b56c9b8460033cf3baa24a067daeb?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kd4tEFPrkKvwNNX5cysWHpbuZdwR4ckpSYK~KVcUA0jLHr1tXAJA5BF9IrM8ewfsExZROfXNQzmwL2JMJVQoSr05Mj9Y~YbIUq2wOX3dh45pcm7ZAc2T-vj3v9ucAGzGpFkK6z7MYPFp2ldbXSE9VWN7Bs~izd8aqzgbtNDTgShZhRNczyVxmobKbbr2T4v1jkXdUvTA7GVaX2X3r6KlvLo1XBwmHOFeQ5ACGBaQr~OplGcGTAk53tMVXbY6QRdx-itWkk99rSQxzO8~AKydOkfo62GCJ-~Bdlbhs8zqwfgRhdQusqEBRT5~SCBSGad5mT-dMFfEBU~DuDzeZxkUaA__')",
                  width: "12.4rem",
                  height: "8.2rem",
                }}
              >
                <div className="absolute inset-0 h-full hover:bg-gradient-to-t from-teal-500 via-transparent"></div>
              </div>
              <div className="flex flex-col gap-4">
                <button className="text-[21px] pr-12 font-extrabold hover:text-orange-600 transition duration-500">
                  SIMPLE & EASY DIY FLOWER DECO
                </button>
                <p className="text-[#999] text-[13px]">
                  By <span className="text-[#2BB9A9] font">Erentheme</span>
                  /September 16, 2019
                </p>
                <p className=" text-[#666] text-[14.5px]">
                  Sapien luctus id justo suscipit nonummy eget hymenaeos...
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div
                style={{
                  position: "relative",
                  backgroundImage:
                    "url('https://s3-alpha-sig.figma.com/img/9efc/4623/f12302a635ba39ce645619575f468f93?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gPZdFUfn6VgJDQp4n7EZCTOvaYxg71tYDpkiUSVBKcotZlpcu6O1N7wwIS2gB4SHXtLAxijflthI1IaUx3DyMkCAiAQNJ3T29LHDKNS4UEELOYhCri2XNdZsl53bXlKndD31EgHJ~7klVU8ryMfW8njtjQj1zfpruDsozhycpqVBx0wmRZGl3N1hEZKOcnz~da4AMRs4CBWltoBDWQNS0SpK0n~4MQBdnoyCdxz8kUFwFMQImFAEqW~NsvZ31kAcfLDT6pDztS-uCzY~HjXVwXGscdYVcStlkmwa5u~zdaDRK6dmalj4x9tXaC3Z3r8VxHJwcqStLddESM7OEDn8wg__')",
                  width: "12.4rem",
                  height: "8.2rem",
                }}
              >
                <div className="absolute inset-0 h-full hover:bg-gradient-to-t transition duration-500 from-teal-500 via-transparent"></div>
              </div>
              <div className="flex flex-col gap-4">
                <button className="text-[21px] pr-12 font-extrabold hover:text-orange-600 transition duration-500">
                  SIMPLE & EASY DIY FLOWER DECO
                </button>
                <p className="text-[#999] text-[13px]">
                  By <span className="text-[#2BB9A9] font">Erentheme</span>
                  /September 16, 2019
                </p>
                <p className=" text-[#666] text-[14.5px]">
                  Sapien luctus id justo suscipit nonummy eget hymenaeos...
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div
                style={{
                  position: "relative",
                  backgroundImage:
                    "url('https://s3-alpha-sig.figma.com/img/40f3/8282/206686f32e320d56775f12afd2b7bc0c?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPkCYBUyhYcvOQa1JzBj1TSKGoHKIFEZCRocmPHot~5R8JSAarlxpo~KC1ILnjvNhN6X3zLh2T1KxZL2O~7rp6iukagAqRIzFR7ILmNWm7a2pypD3SaVuzhaBP25pq7MNvOv3KdwMY73KkwQgppc0-EyxddUqwR3ZAJXwnVsnKUxkt5~HKpiHgPB0cUWjEWkrg2OFuLEno3lW2eG7IayZs~qc-375J58quzWYdO6GHCqwHvLjQEEIbmCH-aM0FAFFfDkPvD~nD32MjSCoBOFWDnVU0PoWycDlbIj4oNMyqfNbsmnvQQpX83vuTrZqUzms~jZnWQmP7xWRevLnSgBxA__')",
                  width: "12.4rem",
                  height: "8.2rem",
                }}
              >
                <div className="absolute inset-0 h-full hover:bg-gradient-to-t from-teal-500 via-transparent"></div>
              </div>
              <div className="flex flex-col gap-4">
                <button className="text-[21px] pr-12 font-extrabold hover:text-orange-600 transition duration-500">
                  SIMPLE & EASY DIY FLOWER DECO
                </button>
                <p className="text-[#999] text-[13px]">
                  By <span className="text-[#2BB9A9] font">Erentheme</span>
                  /September 16, 2019
                </p>
                <p className=" text-[#666] text-[14.5px]">
                  Sapien luctus id justo suscipit nonummy eget hymenaeos...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog;
