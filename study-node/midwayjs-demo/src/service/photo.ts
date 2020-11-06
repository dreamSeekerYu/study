import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Photo } from '../entity/photo';
import { Repository } from 'typeorm';

@Provide()
export class PhotoService {

  @InjectEntityModel(Photo)
  photoModel: Repository<Photo>;

  async savePhoto() {

    // create a entity object
    let photo = new Photo();
    photo.name = "Me and Bears";
    photo.description = "I am near polar bears";
    photo.filename = "photo-with-bears.jpg";
    photo.views = 1;
    photo.isPublished = true;

    // save entity
    const photoResult = await this.photoModel.save(photo);

    // save success
    console.log('photo id = ', photoResult.id);
  }

  // find
  async findPhotos() {

    // find All
    let allPhotos = await this.photoModel.find();
    console.log("All photos from the db: ", allPhotos);
    return allPhotos

    // // find first
    // let firstPhoto = await this.photoModel.findOne(1);
    // console.log("First photo from the db: ", firstPhoto);

    // // find one by name
    // let meAndBearsPhoto = await this.photoModel.findOne({ name: "Me and Bears" });
    // console.log("Me and Bears photo from the db: ", meAndBearsPhoto);

    // // find by views
    // let allViewedPhotos = await this.photoModel.find({ views: 1 });
    // console.log("All viewed photos: ", allViewedPhotos);

    // let allPublishedPhotos = await this.photoModel.find({ isPublished: true });
    // console.log("All published photos: ", allPublishedPhotos);

    // // find and get count
    // let [allPhotos, photosCount] = await this.photoModel.findAndCount();
    // console.log("All photos: ", allPhotos);
    // console.log("Photos count: ", photosCount);

  }

  async updatePhoto() {

    let photoToUpdate = await this.photoModel.findOne(1);
    photoToUpdate.name = "Me, my friends and polar bears";

    await this.photoModel.save(photoToUpdate);
  }


  async removePhoto() {
    /*...*/
    let photoToRemove = await this.photoModel.findOne(1);
    await this.photoModel.remove(photoToRemove);
  }
}