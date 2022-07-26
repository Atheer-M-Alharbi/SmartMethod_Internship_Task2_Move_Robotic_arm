
#include <Servo.h>

Servo gripper;
Servo wrist;
Servo elbow;
Servo shoulder;
Servo base;

double base_angle=90;
double shoulder_angle=90;
double elbow_angle=90;
double wrist_angle=90;


void setup() {
  Serial.begin(9600);

  base.attach(8);
  shoulder.attach(9);
  elbow.attach(10);
  wrist.attach(11);
  gripper.attach(12);

  delay(1);
  base.write(base_angle);
  shoulder.write(shoulder_angle);
  elbow.write(elbow_angle);
  wrist.write(wrist_angle);
  gripper.write(0);

}

void loop() {

  String command = Serial.readString();
  Serial.println(command);

  if (command == "right") {
      base.write(base_angle -= 50);
    }
  if (command == "left") {
     base.write(base_angle += 50);
    }

  delay(2000);

}
