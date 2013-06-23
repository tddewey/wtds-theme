<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
<?php if ( function_exists( 'the_post_format_image' ) && function_exists( 'the_remaining_content' ) ): ?>
	<?php the_post_format_image(); ?>
	<div class="entry">
		<?php the_remaining_content(); ?>
	</div>
<?php else: ?>
	<?php the_content(); ?>
<?php endif; ?>