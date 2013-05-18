<?php
if ( have_posts() ):
	while ( have_posts() ):
		the_post();
		?>

		<article <?php post_class( 'clearfix' ); ?> id="article-<?php the_ID(); ?>">
			<?php get_template_part( 'post-formats/format', get_post_format() ); ?>
		</article>

	<?php
	endwhile; else:
	?>

	<div <?php post_class(); ?>>

		<h2>Page Not Found</h2>

		<p>Looks like the page you're looking for isn't here anymore. Try browsing the <a href="">categories</a>,
			<a href="">archives</a>, or using the search box below.</p>

		<?php get_search_form() ?>

	</div>

<?php endif; ?>

<?php if ( is_home() || is_archive() || is_search() ): ?>
	<nav class="pagenav clearfix">
		<?php     if ( ! get_query_var( 'paged' ) ): ?>
			<div class="newer arrow disabled">
				<div class="right-chevron"></div>
				<a href="javascript:void(0);">First Page</a></div>
			<?php $paged = 1; ?>
		<?php else: ?>
			<div class="newer arrow">
				<div class="right-chevron"></div><?php     previous_posts_link( 'newer' ) ?></div>
			<?php $paged = get_query_var( 'paged' ); ?>
		<?php     endif; ?>

		<div class="current">
			<div class="current-page-num"><?php     echo $paged; ?></div>
			<div class="of">of</div>
			<div class="max-page-num"><?php     echo $wp_query->max_num_pages; ?></div>
		</div>
		<?php     if ( $paged == $wp_query->max_num_pages ): ?>
			<div class="older arrow disabled">
				<div class="left-chevron"></div>
				<a href="javascript:void(0);">No more&hellip;</a></div>
		<?php else: ?>
			<div class="older arrow">
				<div class="left-chevron"></div><?php     next_posts_link( 'older' ) ?></div>
		<?php     endif; ?>
	</nav>
<?php endif; ?>