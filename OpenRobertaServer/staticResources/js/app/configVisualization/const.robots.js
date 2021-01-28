define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ROBOTS = void 0;
    exports.ROBOTS = {
        "arduino_mega": {
            "ports": [
                { name: 'LED_BUILTIN', position: { x: 161.2, y: 9.5 } },
                { name: 'SCL', position: { x: 114.1, y: 9.5 } },
                { name: 'SDA', position: { x: 125.9, y: 9.5 } },
                { name: 'AREF', position: { x: 137.7, y: 9.5 } },
                { name: 'GND', position: { x: 149.4, y: 9.5 } },
                { name: '13', position: { x: 161.2, y: 9.5 } },
                { name: '12', position: { x: 173, y: 9.5 } },
                { name: '11', position: { x: 184.7, y: 9.5 } },
                { name: '10', position: { x: 196.5, y: 9.5 } },
                { name: '9', position: { x: 208.3, y: 9.5 } },
                { name: '8', position: { x: 220, y: 9.5 } },
                { name: '7', position: { x: 238.9, y: 9.5 } },
                { name: '6', position: { x: 250.7, y: 9.5 } },
                { name: '5', position: { x: 262.4, y: 9.5 } },
                { name: '4', position: { x: 274.2, y: 9.5 } },
                { name: '3', position: { x: 286, y: 9.5 } },
                { name: '2', position: { x: 297.7, y: 9.5 } },
                { name: '1', position: { x: 309.5, y: 9.5 } },
                { name: '0', position: { x: 321.3, y: 9.5 } },
                { name: '14', position: { x: 344.8, y: 9.5 } },
                { name: '15', position: { x: 356.6, y: 9.5 } },
                { name: '16', position: { x: 368.3, y: 9.5 } },
                { name: '17', position: { x: 380.1, y: 9.5 } },
                { name: '18', position: { x: 391.8, y: 9.5 } },
                { name: '19', position: { x: 403.6, y: 9.5 } },
                { name: '20', position: { x: 415.4, y: 9.5 } },
                { name: '21', position: { x: 427.2, y: 9.5 } },
                { name: '5V', position: { x: 462.4, y: 9.5 } },
                { name: '5V', position: { x: 474.2, y: 9.5 } },
                { name: '22', position: { x: 462.4, y: 21.3 } },
                { name: '24', position: { x: 462.4, y: 33 } },
                { name: '26', position: { x: 462.4, y: 44.8 } },
                { name: '28', position: { x: 462.4, y: 56.6 } },
                { name: '30', position: { x: 462.4, y: 68.3 } },
                { name: '32', position: { x: 462.4, y: 80.1 } },
                { name: '34', position: { x: 462.4, y: 91.9 } },
                { name: '36', position: { x: 462.4, y: 103.6 } },
                { name: '38', position: { x: 462.4, y: 115.4 } },
                { name: '40', position: { x: 462.4, y: 127.2 } },
                { name: '42', position: { x: 462.4, y: 138.9 } },
                { name: '44', position: { x: 462.4, y: 150.7 } },
                { name: '46', position: { x: 462.4, y: 162.5 } },
                { name: '48', position: { x: 462.4, y: 174.2 } },
                { name: '50', position: { x: 462.4, y: 186 } },
                { name: '53', position: { x: 462.4, y: 197.8 } },
                { name: '23', position: { x: 474.2, y: 21.3 } },
                { name: '25', position: { x: 474.2, y: 33 } },
                { name: '27', position: { x: 474.2, y: 44.8 } },
                { name: '29', position: { x: 474.2, y: 56.6 } },
                { name: '31', position: { x: 474.2, y: 68.3 } },
                { name: '33', position: { x: 474.2, y: 80.1 } },
                { name: '35', position: { x: 474.2, y: 91.9 } },
                { name: '37', position: { x: 474.2, y: 103.6 } },
                { name: '39', position: { x: 474.2, y: 115.4 } },
                { name: '41', position: { x: 474.2, y: 127.2 } },
                { name: '43', position: { x: 474.2, y: 138.9 } },
                { name: '45', position: { x: 474.2, y: 150.7 } },
                { name: '47', position: { x: 474.2, y: 162.5 } },
                { name: '49', position: { x: 474.2, y: 174.2 } },
                { name: '51', position: { x: 474.2, y: 186 } },
                { name: '53', position: { x: 474.2, y: 197.8 } },
                { name: 'GND', position: { x: 462.4, y: 209.5 } },
                { name: 'GND', position: { x: 474.2, y: 209.5 } },
                { name: 'NOTUSER', position: { x: 156.5, y: 233 } },
                { name: 'IOREF', position: { x: 168.3, y: 233 } },
                { name: 'RESET', position: { x: 180, y: 233 } },
                { name: '3,3V', position: { x: 191.8, y: 233 } },
                { name: '5V', position: { x: 203.6, y: 233 } },
                { name: 'GND', position: { x: 215.3, y: 233 } },
                { name: 'GND', position: { x: 227.1, y: 233 } },
                { name: 'Vin', position: { x: 238.9, y: 233 } },
                { name: 'A0', position: { x: 262.4, y: 233 } },
                { name: 'A1', position: { x: 274.2, y: 233 } },
                { name: 'A2', position: { x: 285.9, y: 233 } },
                { name: 'A3', position: { x: 297.7, y: 233 } },
                { name: 'A4', position: { x: 309.5, y: 233 } },
                { name: 'A5', position: { x: 321.2, y: 233 } },
                { name: 'A6', position: { x: 333, y: 233 } },
                { name: 'A7', position: { x: 344.8, y: 233 } },
                { name: 'A8', position: { x: 368.3, y: 233 } },
                { name: 'A9', position: { x: 380, y: 233 } },
                { name: 'A10', position: { x: 391.8, y: 233 } },
                { name: 'A11', position: { x: 403.6, y: 233 } },
                { name: 'A12', position: { x: 415.3, y: 233 } },
                { name: 'A13', position: { x: 427.1, y: 233 } },
                { name: 'A14', position: { x: 438.9, y: 233 } },
                { name: 'A15', position: { x: 450.6, y: 233 } },
            ], "width": "500px", "height": "247px"
        },
        "arduino_nano": {
            "ports": [
                { name: 'LED_BUILTIN', position: { x: 28.9, y: 91.4 } },
                { name: 'RESET', position: { x: 200.3, y: 5.6 } },
                { name: 'GND', position: { x: 186.1, y: 5.6 } },
                { name: '0', position: { x: 214.6, y: 5.6 } },
                { name: '1', position: { x: 228.9, y: 5.6 } },
                { name: '2', position: { x: 171.8, y: 5.6 } },
                { name: '3', position: { x: 157.5, y: 5.6 } },
                { name: '4', position: { x: 143.2, y: 5.6 } },
                { name: '5', position: { x: 128.9, y: 5.6 } },
                { name: '6', position: { x: 114.6, y: 5.6 } },
                { name: '7', position: { x: 100.3, y: 5.6 }, },
                { name: '8', position: { x: 86.1, y: 5.6 } },
                { name: '9', position: { x: 71.8, y: 5.6 } },
                { name: '10', position: { x: 57.5, y: 5.6 } },
                { name: '11', position: { x: 43.2, y: 5.6 } },
                { name: '12', position: { x: 28.9, y: 5.6 } },
                { name: 'VIN', position: { x: 228.9, y: 91.4 } },
                { name: 'GND', position: { x: 214.6, y: 91.4 } },
                { name: 'RESET', position: { x: 200.3, y: 91.4 } },
                { name: '5V', position: { x: 186.1, y: 91.4 } },
                { name: 'A7', position: { x: 171.8, y: 91.4 } },
                { name: 'A6', position: { x: 157.5, y: 91.4 } },
                { name: 'A5', position: { x: 143.2, y: 91.4 } },
                { name: 'A4', position: { x: 128.9, y: 91.4 } },
                { name: 'A3', position: { x: 114.6, y: 91.4 } },
                { name: 'A2', position: { x: 100.3, y: 91.4 } },
                { name: 'A1', position: { x: 86.1, y: 91.4 } },
                { name: 'A0', position: { x: 71.8, y: 91.4 } },
                { name: 'REF', position: { x: 57.5, y: 91.4 } },
                { name: '3V3', position: { x: 43.2, y: 91.4 } },
                { name: '13', position: { x: 28.9, y: 91.4 } }
            ], "width": "253px", "height": "100px"
        },
        "arduino_uno": {
            "ports": [
                { name: 'LED_BUILTIN', position: { x: 131.5, y: 7.8 } },
                { name: 'SCL', position: { x: 93, y: 7.8 } },
                { name: 'SDA', position: { x: 102.6, y: 7.8 } },
                { name: 'AREF', position: { x: 112.2, y: 7.8 } },
                { name: 'GND', position: { x: 121.9, y: 7.8 } },
                { name: '13', position: { x: 131.5, y: 7.8 } },
                { name: '12', position: { x: 141.1, y: 7.8 } },
                { name: '11', position: { x: 150.7, y: 7.8 } },
                { name: '10', position: { x: 160.3, y: 7.8 } },
                { name: '9', position: { x: 169.9, y: 7.8 } },
                { name: '8', position: { x: 179.6, y: 7.8 } },
                { name: '7', position: { x: 195, y: 7.8 } },
                { name: '6', position: { x: 204.7, y: 7.8 } },
                { name: '5', position: { x: 214.3, y: 7.8 } },
                { name: '4', position: { x: 223.9, y: 7.8 } },
                { name: '3', position: { x: 233.5, y: 7.8 } },
                { name: '2', position: { x: 243.1, y: 7.8 } },
                { name: '1', position: { x: 252.8, y: 7.8 } },
                { name: '0', position: { x: 262.4, y: 7.8 } },
                { name: 'NOTUSER', position: { x: 127.7, y: 190.5 } },
                { name: 'IOREF', position: { x: 137.3, y: 190.5 } },
                { name: 'RESET', position: { x: 146.9, y: 190.5 } },
                { name: '3,3V', position: { x: 156.6, y: 190.5 } },
                { name: '5V', position: { x: 166.2, y: 190.5 } },
                { name: 'GND', position: { x: 175.8, y: 190.5 } },
                { name: 'GND', position: { x: 185.4, y: 190.5 } },
                { name: 'Vin', position: { x: 195, y: 190.5 } },
                { name: 'A0', position: { x: 214.3, y: 190.5 } },
                { name: 'A1', position: { x: 223.9, y: 190.5 } },
                { name: 'A2', position: { x: 233.5, y: 190.5 } },
                { name: 'A3', position: { x: 243.1, y: 190.5 } },
                { name: 'A4', position: { x: 252.8, y: 190.5 } },
                { name: 'A5', position: { x: 262.4, y: 190.5 } },
            ], "width": "283px", "height": "202px"
        },
        "arduino_unowifirev2": {
            "ports": [
                { name: 'SCL', position: { x: 93, y: 7.8 } },
                { name: 'SDA', position: { x: 102.6, y: 7.8 } },
                { name: 'AREF', position: { x: 112.2, y: 7.8 } },
                { name: 'GND', position: { x: 121.9, y: 7.8 } },
                { name: '13', position: { x: 131.5, y: 7.8 } },
                { name: '12', position: { x: 141.1, y: 7.8 } },
                { name: '11', position: { x: 150.7, y: 7.8 } },
                { name: '10', position: { x: 160.3, y: 7.8 } },
                { name: '9', position: { x: 169.9, y: 7.8 } },
                { name: '8', position: { x: 179.6, y: 7.8 } },
                { name: '7', position: { x: 195, y: 7.8 } },
                { name: '6', position: { x: 204.7, y: 7.8 } },
                { name: '5', position: { x: 214.3, y: 7.8 } },
                { name: '4', position: { x: 223.9, y: 7.8 } },
                { name: '3', position: { x: 233.5, y: 7.8 } },
                { name: '2', position: { x: 243.1, y: 7.8 } },
                { name: '1', position: { x: 252.8, y: 7.8 } },
                { name: '0', position: { x: 262.4, y: 7.8 } },
                { name: 'NOTUSER', position: { x: 127.7, y: 190.5 } },
                { name: 'IOREF', position: { x: 137.3, y: 190.5 } },
                { name: 'RESET', position: { x: 146.9, y: 190.5 } },
                { name: '3,3V', position: { x: 156.6, y: 190.5 } },
                { name: '5V', position: { x: 166.2, y: 190.5 } },
                { name: 'GND', position: { x: 175.8, y: 190.5 } },
                { name: 'GND', position: { x: 185.4, y: 190.5 } },
                { name: 'Vin', position: { x: 195, y: 190.5 } },
                { name: 'A0', position: { x: 214.3, y: 190.5 } },
                { name: 'A1', position: { x: 223.9, y: 190.5 } },
                { name: 'A2', position: { x: 233.5, y: 190.5 } },
                { name: 'A3', position: { x: 243.1, y: 190.5 } },
                { name: 'A4', position: { x: 252.8, y: 190.5 } },
                { name: 'A5', position: { x: 262.4, y: 190.5 } },
            ], "width": "283px", "height": "202px"
        },
        "calliope": {
            "ports": [
                // Exceptions for weird XML names
                { name: 'motor A', position: { x: 153.8, y: 210 } },
                { name: 'motor B', position: { x: 145, y: 209 } },
                { name: 'ultrasonic 1', position: { x: 245.7, y: 79.5 } },
                { name: 'callibot', position: { x: 73.0, y: 79.5 } },
                // Adressable pins
                { name: '0', position: { x: 16.5, y: 139.2 } },
                { name: '1', position: { x: 88, y: 262 } },
                { name: '2', position: { x: 229.5, y: 262 } },
                { name: '3', position: { x: 301, y: 139.2 } },
                { name: '4', position: { x: 73.0, y: 79.5 } },
                { name: 'A0', position: { x: 73.0, y: 79.5 } },
                { name: '5', position: { x: 245.7, y: 79.5 } },
                { name: 'A1', position: { x: 245.7, y: 79.5 } },
                { name: 'C04', position: { x: 130.8, y: 237 } },
                { name: 'C05', position: { x: 130.8, y: 227.3 } },
                { name: 'C06', position: { x: 140.5, y: 237 } },
                { name: 'C07', position: { x: 140.5, y: 227.3 } },
                { name: 'C08', position: { x: 150, y: 237 } },
                { name: 'C09', position: { x: 150, y: 227.3 } },
                { name: 'C10', position: { x: 169.5, y: 237 } },
                { name: 'C11', position: { x: 169.5, y: 227.3 } },
                { name: 'C12', position: { x: 179, y: 237 } },
                { name: 'C16', position: { x: 198.5, y: 237 } },
                { name: 'C17', position: { x: 198.5, y: 227.3 } },
                { name: 'C18', position: { x: 208, y: 237 } },
                { name: 'C19', position: { x: 208, y: 227.3 } },
                // Power pins
                { name: '3V', position: { x: 88, y: 16 } },
                { name: 'GND', position: { x: 229.5, y: 16 } },
                // Inbuilts
                { name: 'A', position: { x: 57.5, y: 114.3 } },
                { name: 'B', position: { x: 260.5, y: 114.3 } },
                { name: 'buzzer', position: { x: 253.7, y: 155 } },
                { name: 'rgbled', position: { x: 159.5, y: 172 } },
                { name: 'light', position: { x: 158.5, y: 102.7 } },
                { name: 'temperature', position: { x: 116.5, y: 178.5 } },
                { name: 'accelerometer', position: { x: 86, y: 130.3 } },
                { name: 'compass', position: { x: 91.5, y: 130.3 } },
                { name: 'gyro', position: { x: 97, y: 130.3 } },
                { name: 'sound', position: { x: 214.0, y: 90.2 } },
            ], "width": "322px", "height": "283px"
        },
        "microbit": {
            "ports": [
                // Adressable pins
                { name: '0', position: { x: 15, y: 167 } },
                { name: '1', position: { x: 57.3, y: 167 } },
                { name: '2', position: { x: 103.7, y: 167 } },
                { name: '3', position: { x: 1.5, y: 167 } },
                { name: '4', position: { x: 27.9, y: 167 } },
                { name: '5', position: { x: 33.1, y: 167 } },
                { name: '6', position: { x: 38.3, y: 167 } },
                { name: '7', position: { x: 43.5, y: 167 } },
                { name: '8', position: { x: 69.5, y: 167 } },
                { name: '9', position: { x: 74.7, y: 167 } },
                { name: '10', position: { x: 79.9, y: 167 } },
                { name: '11', position: { x: 85.1, y: 167 } },
                { name: '12', position: { x: 90.3, y: 167 } },
                { name: '13', position: { x: 116.2, y: 167 } },
                { name: '14', position: { x: 121.4, y: 167 } },
                { name: '15', position: { x: 126.6, y: 167 } },
                { name: '16', position: { x: 131.8, y: 167 } },
                { name: '19', position: { x: 168.0, y: 167 } },
                { name: '20', position: { x: 173.2, y: 167 } },
                // Power pins
                { name: '3V', position: { x: 150.0, y: 167 } },
                { name: 'GND', position: { x: 191.8, y: 167 } },
                // Inbuilts
                { name: 'A', position: { x: 20.8, y: 86.7 } },
                { name: 'B', position: { x: 187.7, y: 86.7 } },
                { name: 'light', position: { x: 103.7, y: 90 } },
                { name: 'temperature', position: { x: 262, y: 48.2 } },
                { name: 'accelerometer', position: { x: 238.2, y: 99.5 } },
                { name: 'compass', position: { x: 238.2, y: 104.7 } },
            ], "width": "435px", "height": "172px"
        }
    };
});
