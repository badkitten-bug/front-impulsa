import styles from './styles.module.css';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import clsx from 'clsx';
import { PDFIcon } from '../Icons';

function Thumbnail({ photos = [], isImage }) {
	const thumbToRender = photos.map(photo => (
		<img src={photo.preview} key={photo.lastModified} />
	));

	return (
		<div className={styles.thumbnail}>
			{isImage ? (
				thumbToRender
			) : (
				<div className={styles.pdf}>
					<PDFIcon />
					PDF listo para enviar
				</div>
			)}
		</div>
	);
}

function FileUpload({
	children,
	title,
	titleSize,
	subtitle,
	subtitleSize,
	bgHidden = false,
	handleChangeFile,
	isImage = true,
	options = {},
}) {
	const [files, setFiles] = useState([]);
	const onDrop = useCallback(
		acceptedFiles => {
			if (acceptedFiles.length > 0) {
				handleChangeFile(acceptedFiles);
			}
			setFiles(
				acceptedFiles.map(file =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					}),
				),
			);
		},
		[handleChangeFile],
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		...options,
	});

	const containerClassNames = clsx({
		[styles.container]: true,
		[styles.bgNone]: bgHidden,
	});

	const titleClassNames = clsx({
		[styles.titleBase]: true,
		[styles.titleBase]: titleSize === 'base',
		[styles.titleMd]: titleSize === 'md',
		[styles.titleLg]: titleSize === 'lg',
	});

	const subtitleClassNames = clsx({
		[styles.subtitleBase]: true,
		[styles.subtitleBase]: subtitleSize === 'base',
		[styles.subtitleMd]: subtitleSize === 'md',
		[styles.subtitleLg]: subtitleSize === 'lg',
	});

	return (
		<div {...getRootProps()} className={containerClassNames}>
			<input {...getInputProps()} />
			<div className={styles.titleContainer}>
				{files.length === 0 ? (
					children
				) : (
					<Thumbnail photos={files} isImage={isImage} />
				)}
				<p className={titleClassNames}>{title}</p>
				<p className={subtitleClassNames}>{subtitle}</p>
			</div>
		</div>
	);
}

export default FileUpload;
