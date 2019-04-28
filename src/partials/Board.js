import { SVG_NS } from "../settings";

export default class Board {
    constructor(width, height,) {
      this.width = width;
      this.height = height;
 
  
    }
    render(svg) {
      //...
      let rect = document.createElementNS(SVG_NS, "rect");
      rect.setAttributeNS(null,'fill','#353535');
      rect.setAttributeNS(null,'width', this.width);
      rect.setAttributeNS(null,'height', this.height);

      let image = document.createElementNS(SVG_NS,'image');
      image.setAttributeNS(null,'width',this.width);
      image.setAttributeNS(null,'height',this.height);
      image.setAttributeNS(null,'preserveAspectRatio','none');
      image.setAttributeNS(null,'href', './public/giphy-downsized-large.gif');
    
               
      let line = document.createElementNS(SVG_NS, "line");
      line.setAttributeNS(null,'x1', this.width/2);
      line.setAttributeNS(null,'y1',0);
      line.setAttributeNS(null,'x2',this.width/2);
      line.setAttributeNS(null,'y2',this.height);
      line.setAttributeNS(null,'stroke','#FF7E63');
      line.setAttributeNS(null,'stroke-dasharray','14');
      line.setAttributeNS(null,'stroke-width','4');
      
      
      svg.appendChild(rect);
      svg.appendChild(image);
      svg.appendChild(line);
 
      

    }
  }
