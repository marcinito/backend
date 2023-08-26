import { Injectable } from '@nestjs/common';
import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constant';



export const CloudinaryProvider = {
    provide: CLOUDINARY,
    useFactory: ()=> {
      return v2.config({
        cloud_name: 'dwinui6up',
        api_key: '566514497645627',
        api_secret: "dwa",
      });
    },
  };