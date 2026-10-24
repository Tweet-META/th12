// One interleaved WebGL vertex: XY, UV, RGBA, clip W and fog.
// Capacity survives flushes and frames. Growth never splits an authored batch.
export class VertexBatch {
  constructor(){
    this.data=new Float32Array(60*256);
    this.length=0;
  }
  push(x,y,u,v,r,g,b,a,depth,fog){
    const at=this.length;
    if(at+10>this.data.length){
      const next=new Float32Array(this.data.length*2);
      next.set(this.data);this.data=next;
    }
    const data=this.data;
    data[at]=x;data[at+1]=y;data[at+2]=u;data[at+3]=v;
    data[at+4]=r;data[at+5]=g;data[at+6]=b;data[at+7]=a;
    data[at+8]=depth;data[at+9]=fog;
    this.length=at+10;
  }
}
