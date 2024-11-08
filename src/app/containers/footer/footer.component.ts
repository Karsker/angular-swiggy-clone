import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  companyLinks = [
    {
      title: "About Us",
      link: "#"
    },
    {
      title: "Swiggy Corporate",
      link: "#"
    },
    {
      title: "Careers",
      link: "#"
    },
    {
      title: "Team",
      link: "#"
    },
    {
      title: "Swiggy One",
      link: "#"
    },
    {
      title: "Swiggy Instamart",
      link: "#"
    },
    {
      title: "Swiggy Dineout",
      link: "#"
    },
    {
      title: "Swiggy Genie",
      link: "#"
    }
  ];

  contactLinks = [
    {
      title: "Help & Support",
      link: "#"
    },
    {
      title: "Partner with us",
      link: "#"
    },
    {
      title: "Ride with us",
      link: "#"
    }
  ];

  legalLinks = [
    {
      title: "Terms & Conditions",
      link: "#"
    },
    {
      title: "Cookie Policy",
      link: "#"
    },
    {
      title: "Privacy Policy",
      link: "#"
    },
    {
      title: "Investor Relations",
      link: "#"
    }
  ];

  availableAreasLinks = [
    {
      title: "Bangalore",
      link: "#"
    },
    {
      title: "Gurgaon",
      link: "#"
    },
    {
      title: "Hyderabad",
      link: "#"
    },
    {
      title: "Delhi",
      link: "#"
    },
    {
      title: "Mumbai",
      link: "#"
    },
    {
      title: "Pune",
      link: "#"
    }
  ];

  lifeAtSwiggyLinks = [
    {
      title: "Explore with Swiggy",
      link: "#"
    },
    {
      title: "Swiggy News",
      link: "#"
    },
    {
      title: "Snackables",
      link: "#"
    }
  ];
}
