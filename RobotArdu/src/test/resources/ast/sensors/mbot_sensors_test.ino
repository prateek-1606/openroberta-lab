// This file is automatically generated by the Open Roberta Lab.

#define ANALOG2PERCENT 0.0978

#include <math.h>
#include <MeMCore.h>
#include <Wire.h>
#include <SoftwareSerial.h>
#include <MeDrive.h>
#include <NEPODefs.h>

MeUltrasonicSensor _meUltraSensor3(PORT_3);
MeLineFollower __meLineFollower2(PORT_2);
MeLightSensor _meLight6(PORT_6);
MeLightSensor _meLight2(PORT_2);

double ___item;
bool ___item2;

unsigned long __time = millis();

void setup()
{
    Serial.begin(9600); 
    ___item = 0;
    ___item2 = true;
}

void loop()
{
    ___item = _meUltraSensor3.distanceCm();
    ___item2 = (analogRead(PORT_7) < 512);
    ___item2 = !__meLineFollower2.readSensor1();
    ___item = _meLight6.read() * ANALOG2PERCENT;
    ___item = _meLight2.read() * ANALOG2PERCENT;
    ___item = (int) (millis() - __time);
    __time = millis();
}
