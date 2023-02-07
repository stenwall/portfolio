interface Props {
  hover?: boolean;
}

const CameraIcon = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" id="camera-icon" viewBox="0 0 32 32">
    <path
      d="M29.47 14.12a1 1 0 0 0-1 0l-4.45 3V14a1 1 0 0 0-1-1H22a5 5 0 0 0 1-3 5 5 0 0 0-8.56-3.51A6 6 0 1 0 4.54 13H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-3.13l4.45 3A1 1 0 0 0 30 27V15a1 1 0 0 0-.53-.88ZM18 7a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm-4 6h-.57q.16-.18.31-.37c.11.13.19.25.26.37ZM5 9a4 4 0 1 1 4 4 4 4 0 0 1-4-4Zm17 18H4V15h18v12Zm6-1.87-4-2.67v-2.92l4-2.67Z"
      fill="#00000"
    />
  </svg>
);

export default CameraIcon;
