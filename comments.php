<?php	 	 if ( post_password_required() ): ?>
<p class="nocomments">This post is password protected. Enter the password to view comments.</p>
<?php	 	 return; endif; ?>

<?php	 	 if ( have_comments() ) : ?>
<h3 id="comments"><?php	 	 comments_number( 'No Comments', 'One Comment', '% Comments' );?></h3>
<ul class="commentlist">
	<?php	 	 wp_list_comments( array( 'avatar_size' => '39' ) ); ?></ul>
<nav>
	<?php	 	 paginate_comments_links(); ?>
</nav>

<?php	 	 endif;

if ( 'open' == $post->comment_status ) :
	comment_form();
endif;
?>