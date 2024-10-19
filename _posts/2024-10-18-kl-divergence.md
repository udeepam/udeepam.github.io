---
layout: post
title: Kullback-Leibler Divergence
description:
date: 2024-10-18
tags: kl-divergence jensen-inequality
giscus_comments: true
toc:
  sidebar: left
---

## Definition

The Kullback-Leibler divergence (also known as the KL-divergence or relative entropy) is a measure of how one probability distribution is "different" from a second reference probability distribution.

Let $p(x)$ be the true distribution and $q(x)$ be the approximating distribution for the random variable $X$. The forward KL-divergence from $q$ to $p$ is

$$
D_{KL}(p\mid\mid q)=\mathbb{E}_{p(x)}\bigg[\log\frac{p(x)}{q(x)}\bigg]=\mathbb{E}_{p(x)}\Big[\log p(x)-\log q(x)\Big]
$$

The reverse KL-divergence from $p$ to $q$ is

$$
D_{KL}(q\mid\mid p)=\mathbb{E}_{q(x)}\bigg[\log\frac{q(x)}{p(x)}\bigg]=\mathbb{E}_{q(x)}\Big[\log q(x)-\log p(x)\Big]
$$

The KL-divergence has the following properties:

- Not symmetric in it's arguments

  $$
  D_{KL}(p\mid\mid q)\neq D_{KL}(q\mid\mid p)
  $$

- $D_{KL}(p\parallel q)\geq0$, for all $p(x)$ and $q(x)$.

- $D_{KL}(p\mid\mid q)=0$, if and only if $p(x)=q(x)$.

{% details Click here to know more %}
Additional details, where math $$ 2x - 1 $$ and `code` is rendered correctly.
{% enddetails %}
