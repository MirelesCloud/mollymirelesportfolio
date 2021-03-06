import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Work, { WorkBubble } from '../js/work';
import Enzyme from 'enzyme';
Enzyme.configure({adapter: new Adapter()});

const workDetail = [
  {
    'name': "Strategic Marketing Campaigns",
    'info': "The marketing campaigns I have directed include research from a CRM resource, collaboration with graphic designers on design, and inclusion of initiatives from the public relations, social media, and web center teams, as well as advertising recommendations from a media buyer. The plans are customized based on data about my clients' services, their needs and the audiences to which they are appealing.",
    'href': "http://example.com",
    'image': {
      'desc': "marketing image",
      'src': "img/marketingcampaign.jpg",
      'src1': "img/campaign1.png",
      'src2': "img/campaign2.png",
      'src3': "img/campaign3.png"
    },
    'column_1': {
      'h4': "Cosmetic Laser Clinic Campaign:",
      'li1': "Created website, updated regularly",
      'li2': "Direct mail to customized mailing list",
      'li3': "Printed pieces to distribute to patients",
      'li4': "Participation in community events<",
      'li5': "Social media campaign<",
      'li6': "Email campaign",
      'li7': "Return on Investment: 1,100%"
    },
    'column_2': {
      'h4': "Primary Care Campaign:",
      'li1': "Ad on intranet",
      'li2': ">Articles in e-newsletter and organization’s newspaper",
      'li3': "Booth at annual Benefits Fairs",
      'li4': "Posters around organization",
      'li5': "Flyers to employees",
      'li6': "",
      'li7': ""
    },
    'column_3': {
      'h4': "External Marketing:",
      'li1': "Direct mail to relevant audiences",
      'li2': "Social media campaign",
      'li3': "Ads in local publications",
      'li4': "Participation in community events",
      'li5': "Seminars about services",
      'li6': "1,348 new patients in 2014",
      'li7': ""
    }
  },
];

describe("Work component", () => {
  let component = shallow(<Work work={workDetail} />);

  it("Should be a 'span' element", () => {
    expect(component.type()).toEqual('span');
  });

  it("Should contain as many children as there are images", () => {
    expect(component.find("WorkBubble").length).toEqual(workDetail.length);
  })
});

describe("WorkBubble component", () => {
  let mockOpenModalFn = jest.fn();
  let component = shallow(<WorkBubble work={workDetail[0]} openModal={mockOpenModalFn}/>);

  let images = component.find("img");

  it("Should contain a single image element", () => {
    expect(images.length).toEqual(1);
  });

  it("Should have the image src set correctly", () => {
    expect(images.getElement().props.src).toEqual(workDetail[0].image.src);
  });

  it("Should call the openModal handler when clicked", () => {
    component.find(".button-hover").simulate('click');
    expect(mockOpenModalFn).toHaveBeenCalled();
  });

});
