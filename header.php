<!DOCTYPE html>
<!--[if IEMobile 7]><html class="no-js iem7 oldie"><![endif]-->
<!--[if lt IE 7]>
<html class="no-js ie6 oldie" <?php	 	 language_attributes(); ?>><![endif]-->
<!--[if (IE 7)&!(IEMobile)]>
<html class="no-js ie7 oldie" <?php	 	 language_attributes(); ?>><![endif]-->
<!--[if (IE 8)&!(IEMobile)]>
<html class="no-js ie8 oldie" <?php	 	 language_attributes(); ?>><![endif]-->
<!--[if gt IE 8]><!--><html class="no-js" <?php	 	 language_attributes(); ?>><!--<![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)]><!-->
<html class="no-js" <?php	 	 language_attributes(); ?>><!--<![endif]-->
<head>
	<meta charset="utf-8">

	<title><?php	 	 wp_title( '' ); ?></title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="apple-touch-icon-precomposed" href="<?php	 	 echo get_template_directory_uri(); ?>/images/shortcut-icons/apple-touch-icon.png">
	<link rel="shortcut icon" href="<?php	 	 echo get_template_directory_uri(); ?>/images/shortcut-icons/apple-touch-icon.png">
	<link rel="shortcut icon" href="<?php	 	 echo get_template_directory_uri(); ?>/images/shortcut-icons/favicon.ico">
	<meta http-equiv="cleartype" content="on">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<link rel="canonical" href=" <?php	 	 the_permalink(); ?> ">
	<link href='http://fonts.googleapis.com/css?family=Hammersmith+One' rel='stylesheet' type='text/css'>
	<?php	 	 wp_head(); ?>

</head>
<body <?php	 	 body_class( 'clearfix' ); ?> >
<div class="container">
	<header role="banner" class="site-header">
		<div class="header-content">
			<h1 class="tagline"><?php	 	 bloginfo('description'); ?></h1>
			<?php	 	 wp_nav_menu(array(
				'container' => 'nav',
				'theme_location' => 'header'
			) );
			?>
		</div>
		<div class="logo">
			<a href="<?php	 	 echo get_bloginfo('url'); ?>"><img src="<?php	 	 echo get_template_directory_uri(); ?>/images/tdd-logo.png"></a>
		</div>
		<img src="<?php	 	 echo get_template_directory_uri(); ?>/images/header-bezier.png" class="header-bezier">

	</header>
