import React from 'react';
import cn from 'classnames';
import { useDropzone } from 'react-dropzone';
import { FormLabel, Grid } from '@material-ui/core';
import { noop } from 'lodash';
import { FileData } from 'views/Form/typings';
import { File } from 'components';
import { useDropzoneStyles } from './DropzoneStyles';

export interface DropzoneProps {
  value?: FileData[];
  label?: string;
  placeholder?: string;
  error?: boolean | string;
  disabled?: boolean;
  onDrop?: (files: File[]) => void;
  onDelete?: (fileId: string) => () => void;
}

const DEFAULT_PLACEHOLDER = 'Перетащите или добавьте вручную файл';

export const Dropzone = ({
  value: files = [],
  label = '',
  placeholder = DEFAULT_PLACEHOLDER,
  error = false,
  disabled = false,
  onDrop = noop,
  onDelete = () => noop
}: DropzoneProps) => {
  const s = useDropzoneStyles();
  const hasFiles = files && files.length > 0;
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    disabled,
    noClick: hasFiles
  });

  return (
    <Grid>
      <FormLabel className={s.label}>{label}</FormLabel>
      <Grid
        className={cn(s.dropzone, {
          [s.dropzoneActive]: isDragActive,
          [s.dropzoneDisabled]: disabled,
          [s.dropzoneCursor]: !hasFiles
        })}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {hasFiles ? (
          <Grid>
            {files.map(({ _id, ...props }, index) => (
              <File key={_id || index} onDelete={onDelete(_id)} {...props} />
            ))}
          </Grid>
        ) : (
          <Grid component="p" className={s.placeholder}>
            {isDragActive ? 'Поместите файл в выделенную область' : placeholder}
          </Grid>
        )}
      </Grid>
      {error && <FormLabel className={s.label}>{error}</FormLabel>}
    </Grid>
  );
};
