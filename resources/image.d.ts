import {java, javax} from '../types';
import Values from '../objects/Values';
import DataSchema from '../objects/DataSchema';
import File from '../objects/File';
import InputStream from '../objects/InputStream';
import OutputStream from '../objects/OutputStream';
import _storage from './storage';

interface Image {
	affineTransform: {
		(): java.awt.geom.AffineTransform;
		(tx: number[]): java.awt.geom.AffineTransform;
		(m00: double, m10: double, m01: double, m11: double, m02: double, m12: double): java.awt.geom.AffineTransform;
		(tx: java.awt.geom.AffineTransform): java.awt.geom.AffineTransform;
		(tx: java.util.List): java.awt.geom.AffineTransform;
		(tx: Values): java.awt.geom.AffineTransform;
	}
	affineTransformType: {
		(type: string): int;
	}
	attributedString: {
		(text: string, attributes: Values | DataSchema | java.util.Map): java.text.AttributedString;
		(text: string, attributes: Values): java.text.AttributedString;
	}
	bufferedImage: {
		(): java.awt.image.BufferedImage;
	}
	close: {
		(): void;
	}
	color: {
		(r: float, g: float, b: float): java.awt.Color;
		(r: float, g: float, b: float, a: float): java.awt.Color;
		(r: int, g: int, b: int): java.awt.Color;
		(r: int, g: int, b: int, a: int): java.awt.Color;
		(color: string): java.awt.Color;
	}
	colorDecode: {
		(value: string): java.awt.Color;
	}
	convertRGBAToIndexed: {
		(): java.awt.image.BufferedImage;
		(src: java.awt.image.BufferedImage): java.awt.image.BufferedImage;
	}
	crop: {
		(x: int, y: int, width: int, height: int): Image;
	}
	drawArc: {
		(color: java.awt.Color, x: int, y: int, width: int, height: int, startAngle: int, arcAngle: int): Image;
	}
	drawBackground: {
		(color: java.awt.Color): Image;
	}
	drawImage: {
		(image: java.awt.Image, x: int, y: int): Image;
		(image: java.awt.Image, x: int, y: int, rotation: double): Image;
		(image: java.awt.Image, x: int, y: int, width: int, height: int): Image;
		(image: java.awt.Image, x: int, y: int, width: int, height: int, rotation: double): Image;
		(image: java.awt.Image, dx1: int, dxy1: int, dx2: int, dxy2: int, sx1: int, sy1: int, sx2: int, sy2: int): Image;
		(image: java.awt.Image, dx1: int, dxy1: int, dx2: int, dxy2: int, sx1: int, sy1: int, sx2: int, sy2: int, bgColor: java.awt.Color): Image;
		(image: java.awt.Image, x: int, y: int, width: int, height: int, bgColor: java.awt.Color): Image;
		(image: java.awt.Image, x: int, y: int, width: int, height: int, bgColor: java.awt.Color, rotation: double): Image;
		(image: java.awt.Image, x: int, y: int, bgColor: java.awt.Color): Image;
		(image: java.awt.Image, x: int, y: int, bgColor: java.awt.Color, rotation: double): Image;
		(image: java.awt.Image, at: java.awt.geom.AffineTransform): Image;
		(image: java.awt.image.BufferedImage, x: int, y: int): Image;
		(image: java.awt.image.BufferedImage, x: int, y: int, rotation: double): Image;
		(image: Image, x: int, y: int): Image;
		(image: Image, x: int, y: int, rotation: double): Image;
		(image: Image, x: int, y: int, width: int, height: int): Image;
		(image: Image, x: int, y: int, width: int, height: int, rotation: double): Image;
		(image: Image, dx1: int, dxy1: int, dx2: int, dxy2: int, sx1: int, sy1: int, sx2: int, sy2: int): Image;
		(image: Image, dx1: int, dxy1: int, dx2: int, dxy2: int, sx1: int, sy1: int, sx2: int, sy2: int, bgColor: java.awt.Color): Image;
		(image: Image, x: int, y: int, width: int, height: int, bgColor: java.awt.Color): Image;
		(image: Image, x: int, y: int, width: int, height: int, bgColor: java.awt.Color, rotation: double): Image;
		(image: Image, x: int, y: int, bgColor: java.awt.Color): Image;
		(image: Image, x: int, y: int, bgColor: java.awt.Color, rotation: double): Image;
		(image: Image, at: java.awt.geom.AffineTransform): Image;
	}
	drawLine: {
		(color: java.awt.Color, x1: int, y1: int, x2: int, y2: int): Image;
	}
	drawOval: {
		(color: java.awt.Color, x: int, y: int, width: int, height: int): Image;
	}
	drawPolygon: {
		(color: java.awt.Color, xPoints: number[], yPoints: number[], nPoints: int): Image;
		(color: java.awt.Color, xPoints: java.util.List, yPoints: java.util.List): Image;
		(color: java.awt.Color, xPoints: java.util.List, yPoints: java.util.List, nPoints: int): Image;
		(color: java.awt.Color, xPoints: Values, yPoints: Values): Image;
		(color: java.awt.Color, xPoints: Values, yPoints: Values, nPoints: int): Image;
	}
	drawPolyline: {
		(color: java.awt.Color, xPoints: number[], yPoints: number[], nPoints: int): Image;
		(color: java.awt.Color, xPoints: java.util.List, yPoints: java.util.List): Image;
		(color: java.awt.Color, xPoints: java.util.List, yPoints: java.util.List, nPoints: int): Image;
		(color: java.awt.Color, xPoints: Values, yPoints: Values): Image;
		(color: java.awt.Color, xPoints: Values, yPoints: Values, nPoints: int): Image;
	}
	drawRect: {
		(color: java.awt.Color, x: int, y: int, width: int, height: int): Image;
		(color: java.awt.Color, x: int, y: int, width: int, height: int, rotation: double): Image;
	}
	drawRoundRect: {
		(color: java.awt.Color, x: int, y: int, width: int, height: int, arcWidth: int, arcHeight: int): Image;
		(color: java.awt.Color, x: int, y: int, width: int, height: int, arcWidth: int, arcHeight: int, rotation: double): Image;
	}
	drawText: {
		(text: string, font: java.awt.Font, color: java.awt.Color, x: int, y: int): Image;
		(text: string, font: java.awt.Font, color: java.awt.Color, x: int, y: int, rotation: double): Image;
		(text: string, font: java.awt.Font, color: java.awt.Color, x: int, y: int, at: java.awt.geom.AffineTransform): Image;
		(text: java.text.AttributedString, x: int, y: int): Image;
		(text: java.text.AttributedString, x: int, y: int, rotation: double): Image;
		(text: java.text.AttributedString, x: int, y: int, at: java.awt.geom.AffineTransform): Image;
	}
	file: {
		(fileName: string, type: string): File;
	}
	fillArc: {
		(color: java.awt.Color, x: int, y: int, width: int, height: int, startAngle: int, arcAngle: int): Image;
	}
	fillOval: {
		(color: java.awt.Color, x: int, y: int, width: int, height: int): Image;
	}
	fillPolygon: {
		(color: java.awt.Color, xPoints: number[], yPoints: number[], nPoints: int): Image;
		(color: java.awt.Color, xPoints: java.util.List, yPoints: java.util.List): Image;
		(color: java.awt.Color, xPoints: java.util.List, yPoints: java.util.List, nPoints: int): Image;
		(color: java.awt.Color, xPoints: Values, yPoints: Values): Image;
		(color: java.awt.Color, xPoints: Values, yPoints: Values, nPoints: int): Image;
	}
	fillRect: {
		(color: java.awt.Color, x: int, y: int, width: int, height: int): Image;
		(color: java.awt.Color, x: int, y: int, width: int, height: int, rotation: double): Image;
	}
	fillRoundRect: {
		(color: java.awt.Color, x: int, y: int, width: int, height: int, arcWidth: int, arcHeight: int): Image;
		(color: java.awt.Color, x: int, y: int, width: int, height: int, arcWidth: int, arcHeight: int, rotation: double): Image;
	}
	font: {
		(type: int, file: File): java.awt.Font;
		(type: int, file: File, style: int, size: float): java.awt.Font;
		(type: int, storage: typeof _storage): java.awt.Font;
		(type: int, storage: typeof _storage, style: int, size: float): java.awt.Font;
		(name: string, style: int, fontSize: int): java.awt.Font;
		(file: File): java.awt.Font;
		(file: File, size: float): java.awt.Font;
		(file: File, style: int, size: float): java.awt.Font;
		(storage: typeof _storage): java.awt.Font;
		(storage: typeof _storage, size: float): java.awt.Font;
		(storage: typeof _storage, style: int, size: float): java.awt.Font;
	}
	fontField: {
		(field: string): int;
	}
	fontMetrics: {
		(font: java.awt.Font): java.awt.FontMetrics;
	}
	fontStringBounds: {
		(text: string, font: java.awt.Font): java.awt.geom.Rectangle2D;
	}
	getBufferedImage: {
		(): java.awt.image.BufferedImage;
	}
	getFile: {
		(fileName: string, type: string): File;
	}
	getGraphics: {
		(): java.awt.Graphics2D;
	}
	getHeight: {
		(): int;
	}
	getImage: {
		(): java.awt.Image;
	}
	getJPEGCompression: {
		(): float;
	}
	getWidth: {
		(): int;
	}
	graphics: {
		(): java.awt.Graphics2D;
	}
	height: {
		(): int;
	}
	image: {
		(): java.awt.Image;
	}
	init: {
		(width: int, height: int): Image;
		(image: java.awt.Image): Image;
		(file: java.io.File): Image;
		(input: InputStream): Image;
		(input: javax.imageio.stream.ImageInputStream): Image;
		(file: File): Image;
		(input: InputStream): Image;
		(storage: typeof _storage): Image;
	}
	jpegCompression: {
		(): float;
		(jpegCompression: float): Image;
	}
	makeTransparent: {
		(x: int, y: int): java.awt.image.BufferedImage;
		(image: java.awt.image.BufferedImage, x: int, y: int): java.awt.image.BufferedImage;
	}
	output: {
		(type: string): Image;
	}
	renderingHints: {
		(key: java.awt.RenderingHints$Key, value: java.lang.Object): java.awt.RenderingHints;
	}
	renderingHintsKey: {
		(key: string): java.awt.RenderingHints$Key;
	}
	resetGraphics: {
		(): Image;
	}
	resize: {
		(width: int, height: int): Image;
	}
	save: {
		(file: java.io.File, type: string): Image;
		(output: OutputStream, type: string): Image;
		(output: javax.imageio.stream.ImageOutputStream, type: string): Image;
		(file: File, type: string): Image;
		(output: OutputStream, type: string): Image;
		(storage: typeof _storage, type: string): Image;
	}
	setJPEGCompression: {
		(jpegCompression: float): Image;
	}
	width: {
		(): int;
	}
}
declare const _image: Image;
export default _image;