import { Component } from '@angular/core';
import { Tab, TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TableModule } from 'primeng/table';



@Component({
  selector: 'app-laptop-business',
  imports: [TabsModule,ButtonModule,CommonModule,TableModule],
  templateUrl: './laptop-business.component.html',
  styleUrl: './laptop-business.component.css'
})
export class LaptopBusinessComponent {

  constructor(private router: Router,private activatedRoute:ActivatedRoute){}

  brandName:any;
  ngOnInit(){
  this.activatedRoute.queryParams.subscribe((params)=>{
    this.brandName=params['brand'];
   
  })
  }
  navigateToRoute(): void {
    this.router.navigate(['/laptop']);
  }

  valueOffering(brandName:any){
    // console.log(brandName)
  this.router.navigate(['/bwd'],{
    queryParams:{brand:brandName}
  })
  }

  topfivedata: any = [
    {
      "North": [
        { "name": "Pasco Group" },
        { "name": "Dada Motors" },
        { "name": "Koncept Group" },
        { "name": "Triumph Group" },
        { "name": "Go Auto" }
      ],
      "East": [
        { "name": "Bhandari Auto" },
        { "name": "Ralas Motors" },
        { "name": "Rudra Group" },
        { "name": "Toplink Group" },
        { "name": "Iconic Group" }
      ],
      "Central": [
        { "name": "Star Group" },
        { "name": "Bhagirath Auto" },
        { "name": "Rishab Motor" },
        { "name": "Punyashila Group" },
        { "name": "Anand Group" }
      ],
      "South": [
        { "name": "Sree Gokulam" },
        { "name": "Marina Motors" },
        { "name": "Nagsanti Auto" },
        { "name": "True Sai" },
        { "name": "Neon Group" }
      ],
      "West": [
        { "name": "Landmark Group" },
        { "name": "Unnati Motors" },
        { "name": "Ganganagar Motor" },
        { "name": "Rajesh Motors" },
        { "name": "JS4 Wheel" }
      ]
    }
  ];
  


  data:any=[
    {
      "Honda 2W": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
          "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Honda+2W+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
   "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Honda+2W+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Transaction Hygiene Monitoring",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
   "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Honda+2W+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
   "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Honda+2W+Hygiene+Report.pdf"
          }
      ],
      "TVS": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]"
          },
          {
              "image": "default.avif",
              "text": "Enhance Workshop Productivity by CLUSTERS",
              "clickable": false,
              "class": "bgcoming-[#FFFFFF]"
          },
          {
              "image": "default.avif",
              "text": "SELL Dead & Excess Stock at Best Price",
              "clickable": false,
              "class": "bgcoming-[#FFFFFF]"
          },
          {
              "image": "default.avif",
              "text": "BUY OEM Parts at discounted Price",
              "clickable": false,
              "class": "bgcoming-[#FFFFFF]"
          }
      ],
      "Hero": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Hero+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Hero+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Transaction Hygiene Monitoring",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Hero+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Hero+Hygiene+Report.pdf"
          }
      ],
      "Bajaj": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Bajaj+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Bajaj+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Transaction Hygiene Monitoring",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Bajaj+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Bajaj+Hygiene+Report.pdf"
          }
      ],
      "Royal Enfield": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]"
          }
      ],
      "Suzuki 2W": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Maruti+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Maruti+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Transaction Hygiene Monitoring",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Maruti+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Maruti+Hygiene+Report.pdf"
          }
      ],
      "KTM": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/KIA+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/KIA+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/KIA+Hygiene+Report.pdf"
          }
      ],
      "Triumph Motorcycles": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Triumph+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Triumph+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Transaction Hygiene Monitoring",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Triumph+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Triumph+Hygiene+Report.pdf"
          }
      ],
      "Mahindra": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Mahindra+Hygiene+Report.pdf",
              "class": "bg-[#B3E5FC]",
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Mahindra+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Transaction Hygiene Monitoring",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Mahindra+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Mahindra+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Enhance Workshop Productivity by CLUSTERS",
              "clickable": false,
              "class": "bgcoming-[#FFFFFF]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Mahindra+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "SELL Dead & Excess Stock at Best Price",
              "clickable": false,
              "class": "bgcoming-[#FFFFFF]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Mahindra+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "BUY OEM Parts at discounted Price",
              "clickable": false,
              "class": "bgcoming-[#FFFFFF]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Mahindra+Hygiene+Report.pdf"
          }
      ],
      "Hyundai": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Hyundai+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Hyundai+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Transaction Hygiene Monitoring",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Hyundai+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Hyundai+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Enhance Workshop Productivity by CLUSTERS",
              "clickable": false,
              "class": "bgcoming-[#FFFFFF]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Hyundai+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "SELL Dead & Excess Stock at Best Price",
              "clickable": false,
              "class": "bgcoming-[#FFFFFF]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Hyundai+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "BUY OEM Parts at discounted Price",
              "clickable": false,
              "class": "bgcoming-[#FFFFFF]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Hyundai+Hygiene+Report.pdf"
          }
      ],
      "TATA PCBU": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Tata+PCBU+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Tata+PCBU+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Transaction Hygiene Monitoring",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Tata+PCBU+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Tata+PCBU+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Enhance Workshop Productivity by CLUSTERS",
              "clickable": false,
              "class": "bgcoming-[#FFFFFF]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Tata+PCBU+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "SELL Dead & Excess Stock at Best Price",
              "clickable": false,
              "class": "bgcoming-[#FFFFFF]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Tata+PCBU+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "BUY OEM Parts at discounted Price",
              "clickable": false,
              "class": "bgcoming-[#FFFFFF]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Tata+PCBU+Hygiene+Report.pdf"
          }
      ],
      "KIA": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/KIA+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/KIA+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Transaction Hygiene Monitoring",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/KIA+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/KIA+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Enhance Workshop Productivity by CLUSTERS",
              "clickable": false,
              "class": "bgcoming-[#FFFFFF]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/KIA+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "SELL Dead & Excess Stock at Best Price",
              "clickable": false,
              "class": "bgcoming-[#FFFFFF]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/KIA+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "BUY OEM Parts at discounted Price",
              "clickable": false,
              "class": "bgcoming-[#FFFFFF]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/KIA+Hygiene+Report.pdf"
          }
      ],
      "Maruti Suzuki": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Maruti+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Maruti+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Transaction Hygiene Monitoring",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Maruti+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Maruti+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Enhance Workshop Productivity by CLUSTERS",
              "clickable": false,
              "class": "bg-[#A2CFF7]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Maruti+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "SELL Dead & Excess Stock at Best Price",
              "clickable": false,
              "class": "bg-[#A2CFF7]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Maruti+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "BUY OEM Parts at discounted Price",
              "clickable": false,
              "class": "bg-[#A2CFF7]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Maruti+Hygiene+Report.pdf"
          }
      ],
      "Morris Garages": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]"
          }
      ],
      "Skoda": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Transaction Hygiene Monitoring",
              "clickable": false,
              "class": "bg-[#FAF3E0]"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]"
          },
          {
              "image": "default.avif",
              "text": "Enhance Workshop Productivity by CLUSTERS",
              "clickable": false,
              "class": "bg-[#A2CFF7]"
          },
          {
              "image": "default.avif",
              "text": "SELL Dead & Excess Stock at Best Price",
              "clickable": false,
              "class": "bg-[#A2CFF7]"
          },
          {
              "image": "default.avif",
              "text": "BUY OEM Parts at discounted Price",
              "clickable": false,
              "class": "bg-[#A2CFF7]"
          }
      ],
      "Volkswagen": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/VW+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/VW+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Transaction Hygiene Monitoring",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/VW+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/VW+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Enhance Workshop Productivity by CLUSTERS",
              "clickable": false,
              "class": "bg-[#A2CFF7]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/VW+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "SELL Dead & Excess Stock at Best Price",
              "clickable": false,
              "class": "bg-[#A2CFF7]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/VW+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "BUY OEM Parts at discounted Price",
              "clickable": false,
              "class": "bg-[#A2CFF7]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/VW+Hygiene+Report.pdf"
          }
      ],
      "JEEP": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/JEEP+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/JEEP+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Transaction Hygiene Monitoring",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/JEEP+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/JEEP+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Enhance Workshop Productivity by CLUSTERS",
              "clickable": false,
              "class": "bg-[#A2CFF7]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/JEEP+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "SELL Dead & Excess Stock at Best Price",
              "clickable": false,
              "class": "bg-[#A2CFF7]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/JEEP+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "BUY OEM Parts at discounted Price",
              "clickable": false,
              "class": "bg-[#A2CFF7]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/JEEP+Hygiene+Report.pdf"
          }
      ],
      "Renault": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Transaction Hygiene Monitoring",
              "clickable": false,
              "class": "bg-[#FAF3E0]"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]"
          },
          {
              "image": "default.avif",
              "text": "Enhance Workshop Productivity by CLUSTERS",
              "clickable": false,
              "class": "bg-[#A2CFF7]"
          },
          {
              "image": "default.avif",
              "text": "SELL Dead & Excess Stock at Best Price",
              "clickable": false,
              "class": "bg-[#A2CFF7]"
          },
          {
              "image": "default.avif",
              "text": "BUY OEM Parts at discounted Price",
              "clickable": false,
              "class": "bg-[#A2CFF7]"
          }
      ],
      "Honda 4W": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Honda+4W+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Honda+4W+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Transaction Hygiene Monitoring",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Honda+4W+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Honda+4W+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Enhance Workshop Productivity by CLUSTERS",
              "clickable": false,
              "class": "bg-[#A2CFF7]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Honda+4W+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "SELL Dead & Excess Stock at Best Price",
              "clickable": false,
              "class": "bg-[#A2CFF7]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Honda+4W+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "BUY OEM Parts at discounted Price",
              "clickable": false,
              "class": "bg-[#A2CFF7]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Honda+4W+Hygiene+Report.pdf"
          }
      ],
      "TATA CVBU": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Tata+CVBU+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]",
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Tata+CVBU+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Transaction Hygiene Monitoring",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Tata+CVBU+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Tata+CVBU+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Enhance Workshop Productivity by CLUSTERS",
              "clickable": false,
              "class": "bgcoming-[#FFFFFF]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Tata+CVBU+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "SELL Dead & Excess Stock at Best Price",
              "clickable": false,
              "class": "bgcoming-[#FFFFFF]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Tata+CVBU+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "BUY OEM Parts at discounted Price",
              "clickable": false,
              "class": "bgcoming-[#FFFFFF]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Tata+CVBU+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Warraty Audits",
              "clickable": false,
              "class": "bgcoming-[#FFFFFF]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Tata+CVBU+Hygiene+Report.pdf"
          }
      ],
      "Bharat Benz": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Bharat+Benz+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Bharat+Benz+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Transaction Hygiene Monitoring",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Bharat+Benz+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Bharat+Benz+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Enhance Workshop Productivity by CLUSTERS",
              "clickable": false,
              "class": "bg-[#A2CFF7]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Bharat+Benz+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "SELL Dead & Excess Stock at Best Price",
              "clickable": false,
              "class": "bg-[#A2CFF7]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Bharat+Benz+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "BUY OEM Parts at discounted Price",
              "clickable": false,
              "class": "bg-[#A2CFF7]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/Bharat+Benz+Hygiene+Report.pdf"
          }
      ],
      "Ashok Leyland": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]"
          },
          {
              "image": "default.avif",
              "text": "Enhance Workshop Productivity by CLUSTERS",
              "clickable": false,
              "class": "bg-[#A2CFF7]"
          },
          {
              "image": "default.avif",
              "text": "SELL Dead & Excess Stock at Best Price",
              "clickable": false,
              "class": "bg-[#A2CFF7]"
          },
          {
              "image": "default.avif",
              "text": "BUY OEM Parts at discounted Price",
              "clickable": false,
              "class": "bg-[#A2CFF7]"
          }
      ],
      "Volvo Eicher": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Transaction Hygiene Monitoring",
              "clickable": false,
              "class": "bg-[#FAF3E0]"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]"
          },
          {
              "image": "default.avif",
              "text": "Enhance Workshop Productivity by CLUSTERS",
              "clickable": false,
              "class": "bg-[#A2CFF7]"
          },
          {
              "image": "default.avif",
              "text": "SELL Dead & Excess Stock at Best Price",
              "clickable": false,
              "class": "bg-[#A2CFF7]"
          },
          {
              "image": "default.avif",
              "text": "BUY OEM Parts at discounted Price",
              "clickable": false,
              "class": "bg-[#A2CFF7]"
          }
      ],
      "JCB": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/JCB+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/JCB+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Transaction Hygiene Monitoring",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/JCB+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/JCB+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "Enhance Workshop Productivity by CLUSTERS",
              "clickable": false,
              "class": "bgcoming-[#FFFFFF]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/JCB+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "SELL Dead & Excess Stock at Best Price",
              "clickable": false,
              "class": "bgcoming-[#FFFFFF]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/JCB+Hygiene+Report.pdf"
          },
          {
              "image": "default.avif",
              "text": "BUY OEM Parts at discounted Price",
              "clickable": false,
              "class": "bgcoming-[#FFFFFF]",
  "url":"https://scisportfolio150125.s3.us-east-1.amazonaws.com/JCB+Hygiene+Report.pdf"
          }
      ],
      "Escorts": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]"
          }
      ],
      "Kubota": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]"
          }
      ],
      "Mahindra Tractor": [
          {
              "image": "default.avif",
              "text": "Inventory Management",
              "clickable": false,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Business Intelligence Dashboards",
              "clickable": true,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Approval Based Ordering",
              "clickable": false,
              "class": "bg-[#B3E5FC]"
          },
          {
              "image": "default.avif",
              "text": "Physical Stock Audit",
              "clickable": false,
              "class": "bg-[#FAF3E0]"
          }
      ]
  }
  ]
}
 