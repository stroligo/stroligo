<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'digiup' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '%;D*03T&UFSg?jy`l!6tWI3|U2>nwZ+~b7 sj&9;itDbug>F&VG0P]T8tw=?!)U5' );
define( 'SECURE_AUTH_KEY',  'C~D9tAt[^|S=Un.Tl)IWwnN+r>q[^fXWR;Xlcs1h(&)G-E4_l!0w%;c7SW;M[~Uf' );
define( 'LOGGED_IN_KEY',    '(jtM5T,?bu-}1KL>~86wf7^Ie65I89=(g/-qcw~MImR#23bxf/?(wM)1-0~YnKk!' );
define( 'NONCE_KEY',        'Jr)$PZtqiVPDOea!VuQC{S*p~VKn2Gydk$81tw.3*]B,eP_v=a$_Y|Vl%3%w}<(M' );
define( 'AUTH_SALT',        'UVn%5.@*e5wPyMn@oYaIN~*U4h7N+eo?$*985OBT:.)Zw.a`/c[EP D[iYq;}DEE' );
define( 'SECURE_AUTH_SALT', 'A9{IaV_!|lb 7YqEMPwlvTRAD_S&zh/LR(KWj?UY&?M077qD#[-ctrCmqIc{{%R ' );
define( 'LOGGED_IN_SALT',   'fERyh!?yM[w/faa~dk!AyzO&j{7ql{G*b.Q)*!n@qM?sCfj:oa-?pS[9?GTH`JQG' );
define( 'NONCE_SALT',       '%p|A4ow]Hu;n~VbgE@=`5<yXu533HOSn+9Z9VF`=p|=2Z_h>G6<jW?g@(JPMCR1E' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
