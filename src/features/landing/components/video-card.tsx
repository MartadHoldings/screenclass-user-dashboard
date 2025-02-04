import Image from "next/image";
import { Video } from "@/components/shared";

export interface VideoCardProps {
  imageSrc: string;
  videoSrc?: string;
  subject: string;
  description: string;
  topicCount: number;
  moduleCount: number;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  imageSrc,
  videoSrc,
  subject,
  description,
  topicCount,
  moduleCount,
}) => {
  return (
    <div className="h-full w-full rounded-sm p-3 lg:p-5">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt="grade level images"
          width={132}
          height={146}
          className="mx-auto object-cover md:h-[200px] md:w-[200px] lg:h-[235px] lg:w-[235px]"
        />
      )}
      {videoSrc && (
        <Video
          src={videoSrc}
          alt={`${subject} video`}
          width={92}
          height={92}
          className="mx-auto md:h-[140px] md:w-[140px] lg:h-[224px] lg:w-[224px]"
        />
      )}
      <div className="w-full border border-black pt-2">
        <p className="text-xs font-medium text-SC-Nav-Blue md:text-base lg:text-lg">
          {subject}
        </p>
        <div className="mt-6 flex w-full justify-between">
          <p className="text-[8px] text-sm font-normal text-[#BC3508]">
            Topic: {topicCount}
          </p>
          <p className="text-[8px] text-sm font-normal text-[#BC3508]">
            Module: {moduleCount}
          </p>
        </div>
        <hr className="mb-6 mt-4 h-[1px] w-full bg-gray-300" />
        <p className="text-[8px] font-normal text-black md:text-xs">
          {description}
        </p>
      </div>
    </div>
  );
};
