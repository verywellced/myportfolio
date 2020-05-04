import { Component, OnInit } from '@angular/core';
import { AboutInfo } from './about.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  aboutInfo: AboutInfo[] = [
    {
      imgString: "../../../assets/images/pic1.jpg",
      categories: 'Education',
      info: " In 2019, I graduated from Bulacan State University in Malolos, Bulacan with the degree of B.S. Computer Engineering. It was very memorable college life. "
      + "As an Eng'g students there are so many things that I have to accomplished way back then." + "\n \n " +
      "Computer Engineering for me is a broad course wherein you will have a knowledge on different branch of technologies like Electronics, Electrical, Computer Networks"
      + ", Web development and many more. I gained my interest on Web Development when I was on my final year and I decided to pursue a career that is related to this.",
      active: "active"
    },
    {
      imgString: "../../../assets/images/pic2.jpg",
      categories: 'Affiliations',
      info: "I'm currently serving the Lord as a Youth Leader at our church. On this aspect of my life, I've learned how to serve others and what it means to be a servant of all. Also I've learned so much on how to be a good team player and to be focus in order to achieve your goal."
      + "\n \n" +
      " As a Youth Leader our main mission is to proclaim the gospel all over the world." +
       "To win souls and make disciples because it is the great comission that Jesus commanded to His first followers as stated on Matthew 28:19.",
      active: null,
    },
    {
      imgString: "../../../assets/images/pic3.jpg",
      categories: 'Interest',
      info: "I love music. My hobby is to worship the Lord with my guitar. Even though my voice is not that good, I've focus on making music through strings." +
       "Im also a drummer and one of the values I've learn through this instruments is to not give up when you desired something." +"\n \n" + "Learning instruments is not that easy and you can make excuses to stop but as a qoute says 'Don't make your problems as an excuse.",
      active: null,
    },
    {
      imgString: "../../../assets/images/pic4.jpg",
      categories: 'Career',
      info: "After I graduated, I worked as a Jr. IT Developer at Withcenter Inc. on Angeles, Pampanga." +
      "Before I get hired, the IT Head tells me to submit a certain project that requires HTML, CSS and JAVASCRIPT knowledge." + "\n \n" +
      "On my first 2 months, I undergo a training to learn about Angular and Flutter Framework. When I was released to do a job for the development team"
      + ", I was focus on making UI for the app, writing Integration Testing and reporting bugs to the other developers.",
      active: null,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
