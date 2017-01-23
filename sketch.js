function setup() {
createCanvas(600,600)
background(233)
}

function draw() {
  // Head
fill(1)
noStroke()
ellipse(320,180,100,100)

fill(255)
noStroke()
ellipse(330,170,30,30)  

fill(1)
noStroke()
ellipse(330,170,7,7)

fill(150)
noStroke()
ellipse(306,164,10,10)
ellipse(335,148,9,9)
ellipse(349,180,7,7)

  // Antennas
stroke(1)
strokeWeight(2)
line(285,130,300,150)
line(350,60,325,150)
line(390,190,360,185)

  // Neck
stroke(1)
strokeWeight(2)
line(337,200,337,300)
line(324,200,324,300)
line(311,200,311,300)

  // Body
fill(100)
noStroke()
ellipse(310,440,80)

fill(1)
noStroke()
rect(250,290,120,150)

fill(150)
noStroke()
rect(250,305,120,9)
}