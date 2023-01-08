import { createError } from "../error.js";
import User from "../models/User.js";
import Video from "../models/Video.js";

export const addVideo = async (req, res, next) => {
     const newVideo = new Video({ userId: req.user.id, ...req.body });
     try {
          const savedVideo = await newVideo.save()
          res.status(200).json(savedVideo);
     } catch (err) {
          next(err)
     }
}

export const updateVideo = async (req, res, next) => {
     try {
          const video = await Video.findById(req.params.id)
          if (!video) return next(createError(404, "비디오를 찾지 못했습니다."))
          if (req.user.id === video.userId) {
               const updatedVideo = await Video.findByIdAndUpdate(
                    req.params.id,
                    {
                         $set: req.body
                    },
                    { new: true }
               );
               res.status(200).jsom(updatedVideo)
          } else {
               return next(createError(403, "동영상만 업데이트할 수 있습니다."))
          }
     } catch (err) {
          next(err);
     }
}

export const deleteVideo = async (req, res, next) => {
     try {
          const video = await Video.findById(req.params.id)
          if (!video) return next(createError(404, "비디오를 찾지 못했습니다."))
          if (req.user.id === video.userId) {
               await Video.findByIdAndDelete(
                    req.params.id,
               );
               res.status(200).jsom("동영상은 이미 지워졌습니다.")
          } else {
               return next(createError(403, "동영상만 지울 수 있습니다."))
          }
     } catch (err) {
          next(err);
     }
}

export const getVideo = async (req, res, next) => {
     try {
          const video = await Video.findById(req.params.id)
          res.status(200).json(video)
     } catch (err) {
          next(err);
     }
}

export const addView = async (req, res, next) => {
     try {
          await Video.findById(req.params.id, {
               $inc: {views: 1}
          })
          res.status(200).json("보기가 증가했습니다.")
     } catch (err) {
          next(err);
     }
}

export const random = async (req, res, next) => {
     try {
          const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
          res.status(200).json(videos)
     } catch (err) {
          next(err);
     }
}

export const trend = async (req, res, next) => {
     try {
          const videos = await Video.find().sort({views: -1});
          res.status(200).json(videos)
     } catch (err) {
          next(err);
     }
}

export const sub = async (req, res, next) => {
     try {
          const user = await User.findById(req.user.id)
          const subscribedChannels = user.subscribedUsers;

          const list = await Promise.all(
               subscribedChannels.map((channelId) => {
                    return Video.find({ userId: channelId });
               })
          );

          res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
     } catch (err) {
          next(err);
     }
};

export const getByTag = async (req, res, next) => {
     const tags = req.query.tags.split(",")
     try {
          const videos = await Video.find({ tags: { $in: tags } }).limit(20);
          res.status(200).json(videos)
     } catch (err) {
          next(err);
     }
};

export const search = async (req, res, next) => {
     const query = req.query.q;
     try {
          const videos = await Video.find({
               title: { $regex: query, $options: "i" },
          }).limit(40);
          res.status(200).json(videos)
     } catch (err) {
          next(err);
     }
};