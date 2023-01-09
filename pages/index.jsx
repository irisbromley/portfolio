import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 data-cy="homePageTitle" className="title">
              Hi, says Iris
            </h1>
            <p className="description">
              Lorem ipsum pengembang web, fotograper, desainer antarmuka
              pengguna, dan penulis.
            </p>

            <Link href="/contact" className="cta">
              Iris Bromley
            </Link>
          </div>

          <div className="image-wrapper">
            <svg
              width="426"
              height="543"
              viewBox="0 0 426 543"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M73.571 456C74.1354 445.503 74.829 435.015 75.6592 424.536C77.3135 403.662 79.4796 382.772 83.0841 362.139C86.6402 341.78 91.6171 321.984 98.7873 302.584C102.114 293.584 105.716 285.906 110.942 277.815C115.884 270.165 122.189 264.982 130.045 260.364C137.123 256.203 145.346 248.985 152.135 244.325C154.969 242.38 160.8 242.51 162.744 239.633C165.289 235.865 163.639 230.098 166.204 226.343C169.137 222.049 173.245 218.714 177.878 216.291C182.935 212.863 188.89 211.312 194.862 211.525C203.668 210.991 212.537 213.797 218.19 220.971C221.011 224.551 222.658 228.682 222.886 233.256C222.946 234.446 222.564 235.384 221.936 236.061C222.308 236.56 222.679 237.059 223.047 237.561C224.204 235.846 226.907 234.935 228.708 236.229C234.601 240.463 240.969 243.83 247.691 246.297C249.264 245.552 251.168 245.897 252.515 247.113C253.062 247.606 253.642 248.028 254.248 248.386C256.74 249.063 259.271 249.628 261.839 250.064C262.643 250.201 263.325 250.658 263.841 251.274C264.607 250.557 265.659 250.213 266.834 250.662C280.399 255.838 293.21 263.879 302.948 274.773C313.736 286.842 319.402 301.855 323.716 317.236C328.386 333.886 331.37 350.951 333.876 368.044C336.416 385.364 338.918 402.751 340.665 420.171C341.648 429.974 342.023 439.866 341.578 449.712C341.356 454.633 340.907 459.538 340.192 464.412C340.026 465.552 339.851 466.865 339.57 468.176C340.424 468.01 341.441 468.733 341.268 469.889C340.063 477.944 330.333 480.291 323.623 481.218C312.647 482.735 301.614 483.576 290.532 483.641C279.643 483.704 268.755 483.005 257.888 482.378C246.746 481.736 235.605 481.091 224.464 480.437C179.827 477.818 135.187 475.227 90.5498 472.606C86.4718 472.367 81.8152 472.043 78.3221 469.675C73.5338 466.429 73.2875 461.271 73.571 456Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M291.176 365.905C291.331 365.615 290.972 365.354 290.733 365.563C285.314 370.323 282.477 377.967 281.882 385.033C281.252 392.525 282.146 400.283 282.487 407.772C282.867 416.114 283.209 424.46 283.673 432.798C284.144 441.258 284.651 449.715 285.086 458.177L286.064 477.211C286.168 479.24 285.943 481.734 286.721 483.628C287.926 486.563 291.506 486.108 292.259 483.655L292.282 483.575L292.351 483.628C293.015 481.417 292.518 478.792 292.405 476.506L291.38 455.709C290.656 441.01 290.01 426.31 289.232 411.613L288.968 406.714C288.604 400.12 288.325 393.542 288.101 386.949L288.028 384.751C287.816 378.131 287.984 371.882 291.176 365.905ZM159.815 243.876C156.796 243.589 154.516 244.591 151.776 245.646C150.582 246.106 149.451 246.637 148.305 247.186C146.871 247.875 145.949 249.092 145.066 250.378L144.594 251.071C140.917 256.464 138.443 262.685 135.652 268.556C132.388 275.424 129.09 282.277 125.895 289.177L124.318 292.577C123.53 294.277 122.744 295.978 121.97 297.684L120.632 300.653C119.288 303.665 118.083 306.851 119.999 309.958C121.78 312.848 124.937 315.084 127.438 317.317C129.523 319.181 131.609 321.045 133.696 322.908C129.383 327.231 126.487 332.675 124.785 338.513C122.367 337.505 119.415 337.311 116.914 336.875C113.414 336.264 112.985 341.568 116.289 341.503C118.728 341.456 121.59 341.705 124.093 341.191C123.658 343.109 123.343 345.056 123.142 347.009C122.09 357.244 124.388 367.538 126.785 377.441L126.982 378.254C129.585 388.972 132.053 399.719 134.261 410.526C136.473 421.356 138.464 432.232 140.231 443.144C142.029 454.251 143.302 465.419 144.669 476.585C144.876 478.275 145.939 479.723 147.804 479.723C149.359 479.723 151.135 478.271 150.94 476.585C149.528 464.426 147.527 452.33 145.539 440.254C142.114 419.458 137.803 398.842 132.844 378.362L131.978 374.795C129.747 365.545 127.723 356.014 128.842 346.473C129.753 338.704 132.999 330.42 139.413 325.594L139.608 325.449C141.107 324.349 141.683 322.246 140.207 320.797C139.268 319.876 138.328 318.955 137.387 318.035L131.741 312.517L130.603 311.403C129.653 310.475 128.7 309.553 127.717 308.659C127.123 308.119 125.511 307.088 125.393 306.199C125.317 305.619 126.003 304.6 126.281 304.065L127.556 301.49C128.279 300.022 128.981 298.543 129.687 297.067C131.152 294.008 132.637 290.958 134.07 287.884L142.676 269.425C145.104 264.218 147.267 258.72 150.441 253.906L151.067 252.967C151.59 252.177 152.051 251.417 152.381 250.45C152.699 249.52 153.097 248.499 153.684 247.706C155.059 245.844 157.687 244.788 159.885 244.398C160.203 244.341 160.088 243.902 159.815 243.876ZM226.008 239.027C225.817 239.027 225.788 239.301 225.964 239.354C228.617 240.152 231.152 241.44 233.22 243.3C234.209 244.19 235.205 245.2 235.816 246.398C236.05 246.856 236.179 247.34 236.274 247.842L236.304 248.01C236.462 248.917 236.687 249.422 237.148 250.148L237.227 250.271C239.855 254.334 241.697 258.846 243.381 263.364L247.049 273.215L250.714 283.067C251.895 286.242 253.076 289.416 254.257 292.591C254.91 294.343 255.581 296.089 256.251 297.834C256.542 298.59 256.854 299.341 257.119 300.106C257.156 300.211 257.272 300.841 257.359 300.994L257.329 301.046C256.59 302.291 254.618 303.331 253.501 304.235L249.653 307.349C246.909 309.569 244.095 311.728 241.434 314.047C239.762 315.504 240.802 318.112 242.667 318.72C245.791 319.739 248.851 320.958 251.929 322.111C253.172 322.576 254.466 322.981 255.695 323.495L256.442 323.818C256.734 323.95 256.594 323.948 256.582 324.488C256.571 325.054 256.41 325.644 256.318 326.2C255.282 332.473 254.183 338.735 253.023 344.987C248.921 367.093 244.021 389.038 238.431 410.814C235.608 421.811 232.58 432.754 229.695 443.735C226.817 454.686 223.03 465.481 219.414 476.207C218.394 479.231 223.186 480.534 224.181 477.522C228.348 464.907 232.16 452.182 236.097 439.496C243.092 416.954 248.604 393.923 253.479 370.836C255.895 359.394 258.105 347.907 260.107 336.385C260.486 334.204 260.857 332.021 261.221 329.837L261.752 326.625C262.115 324.335 262.322 321.95 260.544 320.138C258.808 318.369 255.828 317.742 253.543 316.913L253.377 316.852C251.923 316.309 250.459 315.786 249 315.246C251.149 313.553 253.271 311.822 255.415 310.13C257.144 308.765 258.9 307.428 260.604 306.032C262.009 304.88 263.155 303.401 263.302 301.528C263.451 299.613 262.632 297.837 261.971 296.081L261.907 295.911C261.258 294.158 260.607 292.407 259.94 290.66L255.81 279.85C253.186 272.981 250.672 266.056 247.912 259.241C246.82 256.543 245.63 253.889 244.224 251.339C243.546 250.11 242.818 248.906 242.028 247.746C241.143 246.445 240.339 245.81 238.967 245.092C236.774 243.944 235.052 242.02 232.849 240.836C230.687 239.674 228.463 239.054 226.008 239.027ZM218.887 226.772C218.803 226.628 218.58 226.692 218.578 226.856C218.52 230.27 219.331 233.759 219.829 237.134C220.33 240.522 220.491 244.098 221.215 247.449C221.23 247.605 221.26 247.759 221.303 247.91L221.337 248.025C221.643 248.964 222.438 249.76 223.414 250.009C223.107 251.71 222.818 253.415 222.575 255.129C222.157 258.074 221.776 261.024 221.401 263.975L220.953 267.516C220.529 270.853 220.117 274.192 219.71 277.531C218.674 277.965 217.617 278.322 216.535 278.632C214.042 279.346 211.488 279.637 208.915 279.889C203.676 280.404 198.397 280.642 193.139 280.934L192.013 280.998C186.102 281.337 180.158 281.397 174.262 280.79C171.338 280.489 168.438 279.984 165.587 279.268C164.138 278.904 162.73 278.361 161.284 278.005C160.804 277.887 160.376 277.615 159.895 277.325C159.682 277.055 159.382 276.85 158.992 276.771L158.887 276.753L158.782 276.738L158.746 276.721L158.749 276.733C158.453 276.693 158.172 276.693 157.907 276.729C157.802 274.126 157.687 271.522 157.544 268.92C157.159 261.929 156.097 254.637 157.515 247.707C157.562 247.474 157.246 247.392 157.163 247.61C154.381 254.946 154.694 262.968 154.554 270.689C154.417 278.239 154.5 285.795 154.537 293.348C153.997 293.578 153.515 293.89 153.133 294.328C152.37 295.203 152.151 296.723 153.133 297.568C153.568 297.942 154.05 298.202 154.561 298.383C154.588 304.944 154.634 311.505 154.7 318.067C153.454 319.03 153.337 321.319 154.747 322.27C154.982 343.518 155.368 364.767 155.688 386.012L156.358 430.585C156.447 436.523 156.595 442.462 156.648 448.4L156.606 448.416L156.458 448.485C156.208 448.603 155.836 448.792 155.759 448.987C155.739 449.038 155.734 449.072 155.736 449.099C155.327 449.156 154.922 449.349 154.571 449.682C153.706 450.505 153.881 451.746 154.571 452.585L154.756 452.809C155.185 453.331 156.002 453.533 156.669 453.426C156.662 457.132 156.638 460.839 156.65 464.545C156.654 465.677 156.671 466.809 156.69 467.941L156.737 470.655C156.768 472.204 156.905 474.173 158.49 474.869C160.278 475.654 161.881 475.011 162.605 473.193C162.802 472.7 162.759 472.242 162.688 471.755C162.71 471.024 162.825 470.176 162.81 469.497L162.751 466.668C162.742 466.231 162.724 465.795 162.712 465.359L162.764 465.364C169.117 465.673 175.515 465.522 181.879 465.518L184.71 465.523C187.071 465.525 189.438 465.512 191.796 465.422L192.68 465.384C194.446 465.301 196.302 465.275 198.133 465.117C197.899 466.997 197.681 468.879 197.487 470.763C197.303 472.549 199.145 474.067 200.788 474.067C202.739 474.067 203.855 472.532 204.089 470.763C205.192 462.419 205.643 453.997 206.696 445.648C207.64 438.17 208.458 430.675 209.29 423.183L209.568 420.685C212.611 393.42 215.566 366.144 218.392 338.855L219.708 326.098C221.037 313.241 222.374 300.382 223.501 287.506C224.146 280.144 224.74 272.78 225.299 265.412C225.71 259.998 225.967 254.614 226.135 249.211C226.796 248.53 227.128 247.535 226.835 246.508C226.664 245.909 226.464 245.313 226.254 244.718C226.267 244.133 226.281 243.548 226.292 242.963C226.303 242.409 225.741 242.124 225.291 242.216C224.474 240.234 223.574 238.27 222.822 236.308C221.606 233.133 220.604 229.711 218.887 226.772ZM286.793 261.096C274.082 253.122 258.952 247.385 243.798 248.003C243.454 248.017 243.357 248.543 243.714 248.622C251.798 250.429 259.97 252.629 267.622 255.831C275.297 259.043 282.594 263.368 289.094 268.566C301.086 278.155 310.407 290.627 316.545 304.687C320.14 312.923 322.66 321.618 324.86 330.316C327.188 339.522 329.107 348.826 330.703 358.187C333.855 376.677 335.69 395.371 336.666 414.097C337.659 433.145 337.25 452.207 337.958 471.259C338.081 474.559 342.794 474.495 343.034 471.259C344.639 449.598 343.75 427.593 342.265 405.948C340.93 386.49 338.599 367.072 334.846 347.927L334.519 346.268C331.01 328.556 326.778 310.414 318.295 294.373C311.052 280.678 299.871 269.3 286.793 261.096ZM110.285 345.75C110.219 345.56 109.968 345.563 109.901 345.75C108.452 349.81 108.4 354.391 108.015 358.671L107.985 359C107.615 362.903 107.337 366.812 107.079 370.723L106.983 372.19C105.945 388.147 104.647 404.086 102.692 419.96C100.744 435.773 98.1102 451.476 95.2619 467.148C94.9445 468.893 95.7167 470.67 97.5448 471.173C99.1563 471.616 101.225 470.622 101.566 468.888C103.334 459.892 104.764 450.885 106.04 441.811C108.286 425.834 109.961 409.783 111.039 393.684C111.58 385.599 111.913 377.517 112.045 369.414C112.106 365.654 112.009 361.886 111.809 358.13L111.761 357.264C111.54 353.425 111.562 349.411 110.285 345.75ZM247.633 447.387C247.463 447.295 247.253 447.484 247.36 447.66C249.821 451.664 253.151 455.116 256.369 458.518C259.733 462.075 263.014 465.739 266.447 469.226C268.927 471.744 272.916 467.681 270.299 465.37C266.619 462.121 262.772 459.034 259.027 455.858L257.389 454.468C254.318 451.871 251.156 449.298 247.633 447.387ZM130.734 445.382C130.917 445.032 130.498 444.748 130.212 444.98C128.227 446.596 126.448 448.523 124.531 450.229C122.633 451.918 120.663 453.493 118.64 455.03C116.609 456.573 114.533 458.054 112.401 459.456C110.633 460.618 108.81 461.549 106.958 462.515C106.101 462.625 105.307 463.046 104.671 463.845C103.666 465.108 103.559 467.49 104.953 468.586L105.204 468.783C106.83 470.063 108.761 470.219 110.363 468.783C112.151 467.18 113.841 465.417 115.558 463.723L116.074 463.217C117.919 461.422 119.719 459.569 121.416 457.633L122.953 455.883C125.803 452.63 128.77 449.123 130.734 445.382ZM139.879 257.817C140.209 257.599 140.005 257.009 139.598 257.15L138.85 257.408C135.726 258.495 132.511 259.7 129.674 261.373C126.626 263.171 123.812 265.312 121.123 267.609C115.558 272.365 110.823 278.212 106.799 284.307C98.7253 296.538 93.7321 310.544 89.7008 324.559C85.4023 339.503 82.0929 354.768 79.3907 370.076C76.645 385.633 74.5267 401.33 73.1346 417.067C72.4488 424.819 71.9884 432.576 71.757 440.355C71.6377 444.357 71.6416 448.356 71.6749 452.359C71.6833 453.389 71.6765 454.418 71.6649 455.447L71.6257 458.534C71.6048 460.486 71.3712 462.538 71.8348 464.445C72.5808 467.515 77.6518 466.942 77.4851 463.804C77.638 462.76 77.644 461.682 77.6044 460.6C77.6284 460.461 77.6546 460.319 77.6836 460.174C77.7668 459.76 77.696 459.376 77.5332 459.046C77.507 458.527 77.4833 458.012 77.4749 457.505C77.4416 455.444 77.4437 453.391 77.5007 451.33C77.6206 446.986 77.7933 442.641 77.9678 438.298C78.3163 429.62 78.8011 420.938 79.5039 412.282C81.9492 382.149 87.1126 351.845 95.7857 322.856C99.8138 309.394 105.367 296.178 113.331 284.546C116.866 279.381 120.855 274.611 125.276 270.184C129.726 265.729 134.629 261.297 139.879 257.817ZM199.891 452.065L199.29 456.416C198.99 458.592 198.692 460.769 198.41 462.947C196.491 462.684 194.529 462.574 192.68 462.41C189.444 462.123 186.185 461.984 182.94 461.85C176.228 461.573 169.482 461.092 162.764 461.126C162.695 461.126 162.63 461.131 162.564 461.136L162.231 452.551L166.952 452.543C170.951 452.537 174.95 452.503 178.949 452.469C182.552 452.438 186.155 452.433 189.756 452.358L191.3 452.321C194.031 452.247 197.047 452.399 199.891 452.065ZM161.835 439.603C162.028 439.625 162.224 439.644 162.432 439.653C163.367 439.693 164.309 439.665 165.245 439.673C167.237 439.69 169.229 439.704 171.222 439.704C175.207 439.703 179.191 439.727 183.175 439.775C187.276 439.825 191.375 439.896 195.476 439.904C197.464 439.908 199.445 439.855 201.431 439.8C201.11 442.625 200.774 445.449 200.403 448.266C197.318 447.849 194 448.059 190.985 448.031L190.594 448.025C186.478 447.955 182.36 448.007 178.243 448.012C174.009 448.017 169.775 448.031 165.54 448.065L162.061 448.094L162.055 447.919C161.953 445.15 161.887 442.377 161.835 439.603ZM202.962 426.084C202.576 429.42 202.214 432.761 201.845 436.101C201.6 436.063 201.351 436.03 201.098 436.004C199.108 435.796 197.122 435.617 195.125 435.493C191.144 435.246 187.163 435.116 183.175 435.009C179.074 434.899 174.973 434.814 170.871 434.756C168.878 434.728 166.886 434.731 164.893 434.745C163.958 434.751 163.014 434.722 162.081 434.785C161.97 434.792 161.863 434.804 161.758 434.816L161.688 429.801C161.675 428.965 161.663 428.13 161.649 427.294C164.73 427.484 167.861 427.412 170.939 427.413L171.648 427.414C175.516 427.432 179.385 427.379 183.252 427.299C187.241 427.215 191.222 427.085 195.204 426.829C196.817 426.726 198.419 426.588 200.023 426.411L200.826 426.319C201.524 426.237 202.243 426.17 202.962 426.084ZM161.332 411.932C168.75 412.521 176.128 412.767 183.566 412.841L184.683 412.85C191.255 412.9 197.882 413.172 204.471 412.997C204.077 416.416 203.684 419.834 203.288 423.252C202.345 423.208 201.397 423.208 200.475 423.174C198.599 423.107 196.729 423.09 194.852 423.086C190.985 423.077 187.119 423.11 183.252 423.103C179.266 423.094 175.282 423.027 171.297 422.952C168.066 422.891 164.802 422.648 161.562 422.657L161.332 411.932ZM161.018 397.348C161.877 397.633 162.892 397.652 164.005 397.703L166.877 397.846C168.208 397.911 169.539 397.973 170.871 398.021C175.308 398.184 179.746 398.336 184.185 398.477C188.733 398.622 193.304 398.706 197.853 398.562C200.081 398.492 202.291 398.375 204.512 398.189C205.061 398.143 205.621 398.113 206.182 398.073C205.665 402.602 205.146 407.131 204.625 411.66C198.068 410.854 191.461 410.353 184.912 409.519L178.99 408.763C173.072 408.007 167.158 407.265 161.218 406.639L161.018 397.348ZM160.702 382.602C161.963 382.914 163.4 382.899 164.612 382.975L164.836 382.991C167.131 383.165 169.432 383.252 171.732 383.309C176.24 383.42 180.751 383.476 185.261 383.503L187.973 383.52C191.588 383.541 195.201 383.55 198.818 383.466C201.137 383.412 203.452 383.299 205.77 383.182C206.464 383.147 207.174 383.124 207.886 383.088C207.401 387.376 206.912 391.663 206.423 395.951C205.662 395.83 204.897 395.738 204.168 395.614C202.299 395.298 200.435 395.046 198.553 394.821C194.478 394.332 190.382 393.98 186.287 393.683C182.084 393.378 177.877 393.12 173.673 392.825L170.696 392.615C169.703 392.546 168.711 392.48 167.718 392.419C166.022 392.314 164.051 392.432 162.369 392.063C161.914 391.873 161.408 391.829 160.902 391.938L160.702 382.602ZM160.32 365.343C160.756 365.898 161.408 366.189 162.185 366.289C166.233 366.815 170.385 366.899 174.467 367.147L175.187 367.192C179.402 367.47 183.62 367.689 187.838 367.913C192.171 368.143 196.503 368.331 200.84 368.482C202.681 368.546 204.532 368.554 206.375 368.53L207.165 368.518C207.923 368.505 208.716 368.507 209.51 368.481C209.07 372.491 208.626 376.5 208.176 380.508C207.366 380.42 206.555 380.353 205.77 380.27C203.453 380.025 201.139 379.782 198.818 379.599C194.418 379.252 190.016 379.043 185.608 378.825C181.099 378.602 176.587 378.453 172.077 378.242C169.89 378.14 167.704 378.013 165.524 377.811C163.996 377.671 162.181 377.15 160.587 377.341C160.5 373.342 160.409 369.342 160.32 365.343ZM159.964 349.882C160.033 349.989 160.114 350.092 160.212 350.189C161.994 351.951 164.191 351.815 166.552 352L166.697 352.012C169.012 352.207 171.327 352.392 173.645 352.559C178.276 352.894 182.917 353.128 187.556 353.336C192.303 353.55 197.081 353.697 201.833 353.6C204.876 353.538 208.063 353.549 211.166 353.252C210.69 357.668 210.21 362.083 209.727 366.498C208.855 366.334 207.976 366.208 207.144 366.077C205.048 365.746 202.949 365.415 200.84 365.172C196.626 364.686 192.411 364.232 188.189 363.822C184.578 363.472 180.969 363.116 177.356 362.796L175.187 362.608C170.876 362.245 166.51 361.647 162.185 361.558C161.472 361.543 160.666 361.932 160.258 362.544C160.162 358.323 160.063 354.103 159.964 349.882ZM159.665 337.365C160.766 337.499 161.952 337.423 162.968 337.456C165.537 337.54 168.106 337.618 170.675 337.694L186.09 338.149C191.338 338.304 196.605 338.42 201.855 338.346C204.165 338.314 206.485 338.31 208.794 338.184L209.563 338.137C210.513 338.074 211.679 338.065 212.818 337.949L211.473 350.413C208.384 349.966 205.201 349.799 202.139 349.537L201.484 349.479C196.968 349.068 192.429 348.795 187.904 348.488C183.262 348.174 178.627 347.792 173.992 347.401C171.675 347.207 169.359 347.012 167.044 346.799L166.758 346.771C164.571 346.542 162.515 346.056 160.578 347.346C160.294 347.535 160.072 347.787 159.921 348.069C159.836 344.501 159.753 340.933 159.665 337.365ZM159.306 322.82C168.694 323.198 178.083 323.485 187.478 323.611C192.766 323.682 198.048 323.632 203.335 323.521C205.628 323.473 207.94 323.363 210.231 323.188L211.089 323.119C212.178 323.027 213.323 322.96 214.462 322.851C213.991 327.136 213.524 331.422 213.06 335.708C211.94 335.5 210.768 335.404 209.786 335.278L209.563 335.248C207.122 334.912 204.658 334.716 202.206 334.5C197.43 334.079 192.63 333.808 187.842 333.577C182.938 333.341 178.032 333.141 173.128 332.922L168.223 332.703C167.405 332.666 166.588 332.631 165.771 332.596C164.602 332.547 163.435 332.5 162.267 332.451C161.691 332.428 161.092 332.349 160.515 332.379L160.351 332.357C160.275 332.347 160.208 332.34 160.147 332.333C159.99 332.213 159.821 332.114 159.642 332.039L159.534 331.997L159.306 322.82ZM216.001 309.035C215.565 312.893 215.134 316.752 214.709 320.611C213.37 320.458 212.015 320.373 210.736 320.258C208.159 320.027 205.569 319.824 202.983 319.705L197.815 319.465C194.37 319.305 190.925 319.151 187.478 319.025C178.043 318.681 168.608 318.286 159.179 317.804C159.112 315.187 159.044 312.569 158.974 309.952C159.426 310.437 160.08 310.756 160.939 310.754C170.839 310.728 180.746 310.785 190.644 310.622C195.599 310.54 200.547 310.42 205.496 310.166C207.918 310.042 210.353 309.788 212.756 309.455C213.781 309.313 214.902 309.211 216.001 309.035ZM217.586 295.289C217.12 299.24 216.664 303.193 216.215 307.147C214.985 306.927 213.715 306.811 212.568 306.654C210.104 306.319 207.625 306.052 205.142 305.912C200.313 305.638 195.48 305.5 190.644 305.398C180.746 305.187 170.839 305.189 160.939 305.11C160.009 305.103 159.319 305.471 158.866 306.021C158.797 303.553 158.725 301.086 158.65 298.617C159.606 298.516 160.554 298.373 161.431 298.312C164.128 298.124 166.825 297.952 169.523 297.797C175.154 297.473 180.79 297.197 186.425 296.952C192.061 296.706 197.699 296.467 203.337 296.258L205.802 296.168C209.723 296.022 213.71 295.837 217.586 295.289ZM219.359 280.406C218.874 284.408 218.397 288.411 217.921 292.415L217.776 293.654C213.061 292.737 208.092 292.468 203.337 292.265C197.698 292.025 192.069 291.902 186.425 291.919C180.786 291.936 175.157 292.07 169.523 292.303C166.708 292.419 163.893 292.553 161.08 292.706C160.306 292.748 159.399 292.726 158.466 292.739C158.446 292.11 158.428 291.481 158.407 290.852C158.321 288.304 158.237 285.756 158.15 283.208C160.053 284.187 162.527 284.581 164.439 284.998L164.657 285.046C167.815 285.756 171.039 286.216 174.262 286.498C180.591 287.05 186.987 286.844 193.31 286.308L194.418 286.214C199.971 285.732 205.727 285.121 211.11 283.745C213.674 283.09 216.325 282.174 218.623 280.845C218.862 280.707 219.108 280.561 219.359 280.406ZM165.893 232.845C165.838 232.628 165.514 232.579 165.408 232.781C164.66 234.203 164.382 235.91 163.863 237.433C163.304 239.071 162.783 240.721 162.166 242.339C160.878 245.719 159.359 248.968 157.548 252.099C155.754 255.2 160.777 257.414 162.097 254.019C163.46 250.516 164.58 246.894 165.257 243.192C165.588 241.386 165.883 239.555 165.978 237.72C166.061 236.143 166.282 234.382 165.893 232.845Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M129.235 164.066C129.376 156.131 129.531 148.037 130.71 140.18C131.862 132.498 135.031 125.554 140.478 119.975C152.047 108.126 168.818 105.232 184.428 102.58L211.116 98.0446C219.259 96.6614 227.945 94.4505 236.172 96.4121C240.225 97.3787 243.668 99.6244 246.814 102.281C249.847 104.842 253.107 107.592 255.162 111.038C257.221 114.488 257.929 118.521 258.598 122.424C259.353 126.823 259.939 131.257 260.356 135.702C261.19 144.607 261.304 153.578 260.699 162.502C260.406 166.83 259.939 171.145 259.343 175.442C259.047 177.572 258.713 179.698 258.336 181.815C258.225 182.44 258.14 183.131 258.026 183.83C258.868 186.226 259.347 188.708 259.308 191.18C259.195 198.459 253.056 203.042 246.867 205.503C243.279 206.93 239.528 207.899 236.002 209.493C232.293 211.17 229.769 213.887 227.233 216.988C222.396 222.901 216.939 228.216 210.707 232.649C197.494 242.05 180.758 246.497 164.726 243.122C160.88 242.312 156.999 241.055 153.542 239.16C149.891 237.16 147.146 234.261 144.841 230.835C140.561 224.473 137.491 217.309 135.169 210.019C132.801 202.583 131.119 195.133 130.202 187.379C129.289 179.65 129.096 171.843 129.235 164.066Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M214.401 70.4036C203.357 68.883 188.113 73.8252 182.613 83.7905C156.353 77.594 123.233 77.391 101.59 98.019C79.0061 122.488 107.373 154.751 126.182 162.025C124.813 168.687 126.948 211.364 142.056 230.4C154.047 246.529 181.97 253.973 194.891 234.708L194.992 234.549C196.376 232.324 195.184 232.395 193.763 234.05C181.111 245.187 163.908 245.377 150.651 233.624C125.807 212.141 128.368 159.467 140.19 128.994C173.854 125.294 209.898 135.507 233.149 160.871L231.577 170.345C231.309 171.959 231.005 173.572 230.772 175.192C230.624 176.23 230.607 177.262 231.326 178.102C233.698 180.876 237.695 176.708 240.985 175.05C241.956 174.914 242.928 174.861 243.882 174.928C259.686 176.965 256.572 207.65 239.203 202.272C237.744 201.362 236.49 201.64 235.924 202.96C231.784 206.756 229.054 213.525 222.176 220.046C219.749 222.491 217.54 224.538 214.811 226.5C213.207 228.123 208.369 229.777 209.903 232.555C212.803 238.875 229.906 219.023 232.93 213.533C242.404 217.278 252.904 216.006 262.722 215.091C314.518 212.395 307.604 157.744 265.147 123.241C257.156 117.352 248.338 112.548 239.172 108.851C237.921 108.346 238.468 106.289 239.737 106.801C245.801 109.248 251.714 112.16 257.349 115.53L257.358 113.515C257.366 110.121 257.313 106.588 256.724 103.487C256.43 101.339 255.935 99.0437 255.172 97.3173C254.23 92.0244 239.468 73.8564 214.401 70.4036ZM244.574 181.973C243.774 181.212 242.281 182.119 241.569 182.096C239.748 182.346 238.019 183.115 236.67 184.065C235.779 184.565 235.155 185.034 234.633 185.465L234.619 185.461C234.623 185.461 234.628 185.465 234.632 185.466L234.583 185.5C233.823 186.04 231.043 189.082 232.8 188.264C232.931 188.093 233.065 187.93 233.2 187.769C233.214 187.791 233.235 187.813 233.259 187.834L233.16 187.98C231.667 190.228 234.245 187.86 234.641 187.231C234.66 187.246 234.681 187.256 234.702 187.267L234.186 187.897C234.113 187.986 234.057 188.057 234.01 188.118L233.901 188.223C232.174 189.921 232.12 191.45 234.126 188.939C234.047 189.057 233.984 189.182 233.975 189.294L233.856 189.445C232.281 191.476 233.562 190.755 234.345 189.887L234.41 189.813L234.397 189.833C233.669 190.955 235.113 190.168 235.368 189.568L235.379 189.54C235.657 189.313 235.828 189.058 235.887 188.994L235.898 188.983C237.252 187.595 239.214 186.42 240.881 185.886C241.123 185.84 241.368 185.803 241.615 185.777C242.617 185.553 243.631 185.4 244.655 185.317C244.78 185.302 244.907 185.21 245.002 185.091C246.55 185.039 246.072 184.403 245.43 184.285L245.419 184.283L245.546 184.273C246.54 184.175 247.219 183.819 246.214 183.599L246.086 183.574C246.102 183.55 246.116 183.525 246.129 183.501C246.99 183.406 246.428 182.569 245.951 182.771C246.152 182.114 245.233 182.442 245.118 182.344C245.031 182.247 244.922 182.162 244.86 182.157C244.583 181.961 244.717 181.979 244.574 181.973ZM239.308 171.323L239.51 171.441C239.673 171.537 239.84 171.6 240.009 171.637C239.771 171.738 239.536 171.848 239.304 171.965C239.307 171.822 239.31 171.679 239.31 171.537L239.308 171.323Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M160.566 214.706C163.173 215.462 165.971 215.529 168.628 214.749C171.039 214.041 173.513 212.483 175.287 210.421C176.863 208.59 177.883 206.364 177.843 203.988C177.839 203.717 177.742 203.491 177.593 203.315C177.432 203.126 177.208 202.996 176.968 202.939C176.721 202.881 176.46 202.902 176.237 203.003C176.036 203.094 175.864 203.25 175.756 203.477C175.483 203.835 175.212 204.189 174.939 204.532C172.747 207.241 170.625 209.266 167.329 209.992C165.54 210.386 163.754 210.211 162.116 209.61C160.361 208.966 158.776 207.835 157.533 206.387C156.971 205.732 156.308 205.465 155.66 205.46C154.926 205.455 154.199 205.797 153.652 206.343C153.115 206.88 152.755 207.61 152.722 208.373C152.693 209.042 152.912 209.742 153.492 210.366C155.405 212.422 157.884 213.928 160.566 214.706ZM160.647 180.776C157.974 182.402 153.903 186.193 156.778 190.223C160.161 193.777 165.033 189.702 167.434 187.86C169.66 186.431 172.161 190.105 170.096 191.772C152.748 204.628 145.707 181.201 159.295 178.864C160.791 178.607 161.347 180.273 160.647 180.776ZM185.644 173.622C186.503 173.072 187.513 172.883 188.633 173.393C189.508 173.792 191.043 175.119 192.111 176.865C192.841 178.059 193.36 179.46 193.252 180.919C193.227 181.258 193.352 181.508 193.549 181.692C193.705 181.838 193.93 181.945 194.194 181.979C194.419 182.007 194.67 181.982 194.874 181.918C195.263 181.797 195.469 181.544 195.546 181.338C196.294 179.35 195.972 177.132 195.134 175.131C194.003 172.43 191.949 170.168 190.603 169.438C188.3 168.19 185.583 168.132 183.277 169.404C181.314 170.487 180.086 172.235 178.866 174.016C178.606 174.395 178.348 174.771 178.082 175.14C177.549 175.88 177.496 176.614 177.702 177.244C177.931 177.941 178.515 178.53 179.245 178.838C179.919 179.122 180.702 179.162 181.395 178.87C181.98 178.623 182.517 178.141 182.857 177.324C183.429 175.948 184.383 174.429 185.644 173.622ZM142.024 176.684C142.612 176.991 143.072 177.083 143.724 176.887C144.085 176.779 144.442 176.571 144.721 176.291C144.998 176.014 145.198 175.67 145.275 175.288C145.466 174.345 145.981 173.462 146.716 172.887C147.344 172.395 148.136 172.134 149.015 172.281C149.964 172.44 150.868 173.049 151.49 173.767C151.698 174.007 151.861 174.28 152.025 174.551C152.332 175.057 152.63 175.528 153.053 175.901C153.213 176.042 153.455 176.14 153.689 176.14C153.784 176.14 153.88 176.125 153.972 176.096C154.916 175.148 155.098 174.428 155.067 173.714C155.035 172.966 154.741 172.208 154.264 171.501C153.147 169.843 151.025 168.483 149.594 168.175C147.633 167.754 145.686 168.26 144.125 169.356C142.519 170.484 141.328 172.235 140.957 174.208C140.868 174.683 140.906 175.196 141.087 175.641C141.263 176.076 141.571 176.448 142.024 176.684ZM181.32 155.941C182.497 157.088 183.889 157.266 185.298 157.424C186.081 157.513 186.706 157.584 187.321 157.723C189.011 158.105 190.682 158.68 192.206 159.508C193.799 160.374 195.536 161.419 196.785 162.757C197.082 163.075 197.362 163.409 197.642 163.744C197.898 164.049 198.144 164.343 198.404 164.626C198.702 164.952 198.985 165.293 199.267 165.633C199.441 165.92 199.475 165.991 199.51 166.065C199.563 166.175 199.625 166.299 199.695 166.431C199.791 166.613 199.903 166.812 200.021 166.992C200.217 167.321 200.322 167.412 200.413 167.453C200.564 167.52 200.707 167.553 200.845 167.535C200.975 167.518 201.098 167.456 201.219 167.353C201.823 166.843 202.001 166.004 201.983 165.114C201.955 163.764 201.458 162.268 200.999 161.349C199.932 159.214 198.453 156.993 196.674 155.399C194.644 153.58 192.423 152.202 189.873 151.253C188.287 150.663 186.452 150.121 184.725 150.19C183.482 150.239 182.296 150.609 181.316 151.532C180.714 152.099 180.425 152.906 180.425 153.712C180.425 154.534 180.725 155.361 181.32 155.941ZM139.631 166.448C139.705 166.571 139.809 166.656 139.924 166.706C140.045 166.76 140.18 166.775 140.309 166.753C140.438 166.731 140.561 166.673 140.658 166.584C140.751 166.498 140.822 166.384 140.854 166.245C141.635 162.811 143.152 160.256 146.389 158.608C147.982 157.798 149.813 157.283 151.547 156.872C152.051 156.753 152.583 156.675 153.119 156.597C154.799 156.352 156.491 156.07 157.587 154.711C158.247 153.892 158.524 152.845 158.367 151.887C158.22 150.986 157.693 150.159 156.736 149.663C154.354 148.43 151.393 149.64 148.987 150.671C148.809 150.747 148.633 150.822 148.462 150.895C146.109 151.889 143.963 153.201 142.2 155.077C140.8 156.566 139.503 158.767 138.981 161.031C138.546 162.914 138.649 164.837 139.631 166.448Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M160.257 194.576C164.193 192.802 171.26 194.35 173.825 194.966C179.79 196.397 185.79 199.491 187.644 204.339C189.734 209.802 185.565 211.521 184.951 211.24C180.822 211.532 175.905 208.933 171.579 208.263C168.066 207.714 164.361 207.235 161.07 205.367C158.667 206.69 153.24 207.405 148.86 208.561C145.13 209.546 143.514 211.682 140.056 211.228C135.911 210.684 137.607 201.958 142.227 198.424C147.282 194.555 155.832 192.987 160.257 194.576ZM152.465 231.883C155.908 232.723 156.14 225.17 156.525 222.501C156.827 220.416 158.526 215.04 162.835 215.272C167.144 215.504 168.763 220.008 168.545 222.81C168.403 224.627 166.73 233.83 172.069 234.994C175.473 234.982 179.411 234.752 182.99 234.091C187.203 233.137 192.68 229.793 194.127 236.378C194.648 238.747 176.092 245.788 167.857 246.425C159.507 248.118 149.736 245.514 143.79 239.12C142.438 237.665 138.628 231.627 138.357 230.147C137.787 227.039 139.107 225.039 142.949 226.135C145.663 227.585 150.251 231.343 152.465 231.883Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M135.815 186.807C141.126 189.368 148.535 185.591 152.106 181.636C153.406 180.196 154.409 176.075 153.909 173.462C152.555 166.384 147.466 162.137 142.094 160.686C134.647 158.675 127.153 163.77 128.026 169.782C128.855 175.48 130.11 183.746 135.815 186.807ZM171.964 173.212C172.389 180.925 178.577 187.676 185.973 189.676C197.89 193.004 203.779 184.62 206.446 175.587C206.711 174.69 207.335 171.95 205.663 169.6C199.087 160.357 183.087 161.933 175.096 164.47C172.757 166.709 171.8 169.941 171.964 173.212ZM130.045 159.909C130.048 159.914 130.053 159.918 130.056 159.922C130.083 159.906 130.11 159.889 130.138 159.872C130.107 159.885 130.075 159.896 130.045 159.909ZM120.075 160.801C120.767 152.948 145.383 155.955 148.261 156.598C156.116 158.911 162.9 165.201 171.682 162.436C180.781 152.283 211.423 155.195 217.846 160.367C219.062 159.889 220.54 160.145 222.107 160.596C230.152 160.305 266.878 163.081 259.366 173.358C258.226 174.15 257.087 173.345 257.056 171.714C217.895 157.564 221.691 170.818 217.047 169.27C216.337 169.474 215.598 169.603 214.95 169.739C211.356 170.897 210.135 170.539 209.662 174.578C206.409 205.767 164.915 195.002 168.318 169.42C164.949 169.234 162.001 167.776 158.438 169.2C155.964 193.299 136.589 194.272 130.759 185.918C126.362 180.12 128.105 171.369 122.061 166.808C119.676 168.806 119.522 162.061 120.075 160.801Z"
                fill="black"
              />
              <path
                d="M56.134 505.5C56.5189 504.833 57.4811 504.833 57.866 505.5L65.6603 519C66.0452 519.667 65.564 520.5 64.7942 520.5H49.2058C48.436 520.5 47.9548 519.667 48.3397 519L56.134 505.5Z"
                fill="black"
                fillOpacity="0.5"
              />
              <path
                d="M44.134 491.5C44.5189 490.833 45.4811 490.833 45.866 491.5L59.7224 515.5C60.1073 516.167 59.6262 517 58.8564 517H31.1436C30.3738 517 29.8927 516.167 30.2776 515.5L44.134 491.5Z"
                fill="black"
              />
              <circle
                cx="25.5"
                cy="187.5"
                r="12.5"
                fill="black"
                fillOpacity="0.5"
              />
              <circle cx="15.5" cy="177.5" r="15.5" fill="black" />
              <rect
                x="404"
                y="349"
                width="22"
                height="22"
                rx="1"
                fill="black"
                fillOpacity="0.5"
              />
              <rect
                x="394"
                y="354"
                width="27"
                height="27"
                rx="1"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
