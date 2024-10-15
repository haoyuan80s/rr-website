
daily_data = {
    "date": "2024-10-15",
    "tweets": [
        
        {
            "startTime": "01:11",
            "arxivId": "2410.10181",
            "arxivLink": "https://arxiv.org/abs/2410.10181",
            "title": "Language Models Get a Multi-Domain Makeover: Modular Experts to the Rescue!",
            "institute": "Google",
            "text": "This research introduces Modular Domain Experts (MoDE), a novel approach to adapting pre-trained language models (PLMs) to multiple domains. Unlike previous methods that fine-tune the entire model or introduce low-rank updates, MoDE augments the PLM with modular, domain-specific experts that are trained independently and then composed together.",
            "paper-title": "Scalable Multi-Domain Adaptation of Language Models using Modular Experts",
            "image-path": "flux_paper_image/2410.10181_1729030128.png"
        },

        {
            "startTime": "01:31",
            "arxivId": "2410.10817",
            "arxivLink": "https://arxiv.org/abs/2410.10817",
            "title": "Human-Aligned Vision: Seeing the World Like We Do!",
            "institute": "MIT, U.C. Berkeley, TU Berlin...",
            "text": "This research investigates the impact of aligning vision models to human perceptual judgments on various downstream computer vision tasks. Unlike previous work that focused on specific tasks like image retrieval, this study explores the broader implications of human alignment on general-purpose representations.",
            "paper-title": "When Does Perceptual Alignment Benefit Vision Representations?",
            "image-path": "flux_paper_image/2410.10817_1729028376.png"
        },

        {
            "startTime": "02:01",
            "arxivId": "2410.09101",
            "arxivLink": "https://arxiv.org/abs/2410.09101",
            "title": "Data Taggants: Sneaking Secret Signatures into Your AI Models!",
            "institute": "Meta",
            "text": "This paper introduces \"data taggants,\" a new method for verifying dataset ownership that uses clean-label data poisoning to subtly alter a dataset, making models trained on it respond to specific \"key\" samples with corresponding labels. Unlike previous backdoor watermarking approaches, data taggants don't rely on triggers or degrade model performance.",
            "paper-title": "Data Taggants: Dataset Ownership Verification via Harmless Targeted Data Poisoning",
            "image-path": "flux_paper_image/2410.09101_1729030778.png"
        },

        {
            "startTime": "02:27",
            "arxivId": "2410.10821",
            "arxivLink": "https://arxiv.org/abs/2410.10821",
            "title": "Tex4D: Turning Untextured Meshes Into Textured Movies with AI!",
            "institute": "CUHK-Shenzhen, NVIDIA, UC Merced",
            "text": "This research introduces Tex4D, a method for generating multi-view and temporally consistent textures for animated 3D mesh sequences using a pre-trained text-to-video diffusion model. Unlike previous methods that focus on static 3D objects or lack 3D geometry awareness, Tex4D leverages the inherent 3D geometry knowledge from the mesh sequence to achieve multi-view consistency.",
            "paper-title": "Tex4D: Zero-shot 4D Scene Texturing with Video Diffusion Models",
            "image-path": "flux_paper_image/2410.10821_1729028554.png"
        },

        {
            "startTime": "02:55",
            "arxivId": "2410.09349",
            "arxivLink": "https://arxiv.org/abs/2410.09349",
            "title": "Language Models: They're Not Just Mimicking, They're Thinking!",
            "institute": "Stanford University, Montreal Institute for Learning Algorithms",
            "text": "This research proposes that large language models (LLMs) perform in-context learning (ICL) through two distinct functions: an inference function that understands the task and an independent verbalization function that maps the answer to the correct label words. This is a departure from previous work that focused on LLMs relying solely on semantic priors or implicit gradient descent.",
            "paper-title": "Inference and Verbalization Functions During In-Context Learning",
            "image-path": "flux_paper_image/2410.09349_1729027850.png"
        },

        {
            "startTime": "03:27",
            "arxivId": "2410.09615",
            "arxivLink": "https://arxiv.org/abs/2410.09615",
            "title": "SLIM: Shrinking LLMs Without the Diet and Exercise!",
            "institute": "University of Toronto",
            "text": "This paper introduces SLIM, a one-shot method for compressing LLMs that combines quantization and sparsity with a novel saliency-based low-rank approximation. Unlike previous methods, SLIM doesn't require retraining, making it more efficient.",
            "paper-title": "SLiM: One-shot Quantized Sparse Plus Low-rank Approximation of LLMs",
            "image-path": "flux_paper_image/2410.09615_1729030186.png"
        },

        {
            "startTime": "03:49",
            "arxivId": "2410.10744",
            "arxivLink": "https://arxiv.org/abs/2410.10744",
            "title": "Out-of-Distribution Detection: A Stable, Adversarial-Proof Approach",
            "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
            "text": "This research proposes AROS, a novel approach for robust out-of-distribution (OOD) detection that leverages neural ordinary differential equations (NODEs) with Lyapunov stability theory. Unlike previous methods that rely on auxiliary OOD datasets, AROS crafts fake OOD samples in the embedding space, reducing the need for extensive data collection.",
            "paper-title": "Adversarially Robust Out-of-Distribution Detection Using Lyapunov-Stabilized Embeddings",
            "image-path": "flux_paper_image/2410.10744_1729026606.png"
        },

        {
            "startTime": "04:12",
            "arxivId": "2410.10267",
            "arxivLink": "https://arxiv.org/abs/2410.10267",
            "title": "Vision Transformers Get a Big.LITTLE Makeover for Speed!",
            "institute": "Huazhong University of Science and Technology, Beihang University, Tsinghua University...",
            "text": "This paper introduces a novel \"big.LITTLE\" architecture for Vision Transformers (ViT) that dynamically allocates computational resources to different image tokens based on their importance. This approach differs from previous token pruning methods by preserving context information and achieving a better speed-accuracy tradeoff.",
            "paper-title": "big.LITTLE Vision Transformer for Efficient Visual Recognition",
            "image-path": "flux_paper_image/2410.10267_1729030726.png"
        },

        {
            "startTime": "04:39",
            "arxivId": "2410.10629",
            "arxivLink": "https://arxiv.org/abs/2410.10629",
            "title": "Sana: Text-to-Image Generation That's Fast, Cheap, and Doesn't Need a Supercomputer!",
            "institute": "NVIDIA, MIT, Tsinghua University",
            "text": "This research introduces Sana, a text-to-image generation model that uses a deep compression autoencoder to reduce the number of latent tokens, making it significantly faster and more efficient than previous models. It also replaces traditional attention mechanisms with linear attention, further enhancing speed without sacrificing quality.",
            "paper-title": "SANA: Efficient High-Resolution Image Synthesis with Linear Diffusion Transformers",
            "image-path": "flux_paper_image/2410.10629_1729029639.png"
        },

        {
            "startTime": "04:59",
            "arxivId": "2410.10812",
            "arxivLink": "https://arxiv.org/abs/2410.10812",
            "title": "Image Generation: Autoregressive Models Get a Hybrid Makeover",
            "institute": "MIT",
            "text": "This research introduces a new approach to image generation called HART (Hybrid Autoregressive Transformer). Unlike previous autoregressive models that rely solely on discrete tokens, HART combines discrete tokens with continuous tokens, allowing it to generate higher-quality images with more detail.",
            "paper-title": "HART: Efficient Visual Generation with Hybrid Autoregressive Transformer",
            "image-path": "flux_paper_image/2410.10812_1729027969.png"
        },

        {
            "startTime": "05:22",
            "arxivId": "2410.10819",
            "arxivLink": "https://arxiv.org/abs/2410.10819",
            "title": "LLMs Get a Memory Makeover: DuoAttention Makes Long Contexts a Breeze!",
            "institute": "MIT, Tsinghua University, SJTU...",
            "text": "This paper introduces DuoAttention, a framework that categorizes attention heads in LLMs into two types: Retrieval Heads and Streaming Heads. Unlike previous methods that rely on attention patterns, DuoAttention directly measures output deviation to identify retrieval heads, which are crucial for long-context processing.",
            "paper-title": "DuoAttention: Efficient Long-Context LLM Inference with Retrieval and Streaming Heads",
            "image-path": "flux_paper_image/2410.10819_1729028322.png"
        },

        {
            "startTime": "05:49",
            "arxivId": "2410.09979",
            "arxivLink": "https://arxiv.org/abs/2410.09979",
            "title": "Face Width: Not a Ticket to Trouble, Says New Study",
            "institute": "Stanford University",
            "text": "This research examined the relationship between facial width-to-height ratio (fWHR) and various behavioral tendencies using a much larger sample size than previous studies, which were often limited to small, laboratory-based settings.",
            "paper-title": "Facial Width-to-Height Ratio Does Not Predict Self-Reported Behavioral Tendencies",
            "image-path": "flux_paper_image/2410.09979_1729026457.png"
        },

        {
            "startTime": "06:11",
            "arxivId": "2410.09407",
            "arxivLink": "https://arxiv.org/abs/2410.09407",
            "title": "Tiny Brains, Big Tasks: How On-Device AI Can Handle Complex Queries",
            "institute": "Stanford University, Apple",
            "text": "This research introduces CAMPHOR, a framework that uses multiple small language models (SLMs) working together on a device to handle complex user queries, unlike previous approaches that relied on large language models (LLMs) on servers.",
            "paper-title": "CAMPHOR: Collaborative Agents for Multi-input Planning and High-Order Reasoning On Device",
            "image-path": "flux_paper_image/2410.09407_1729029301.png"
        },

        {
            "startTime": "06:31",
            "arxivId": "2410.10148",
            "arxivLink": "https://arxiv.org/abs/2410.10148",
            "title": "AI Alignment Gets a Tune-Up: Adaptive Reward Margin Makes LLMs Smarter",
            "institute": "University of Science and Technology of China, Alibaba Group, Meta",
            "text": "This paper proposes \u03b1-DPO, a new preference optimization algorithm that uses a dynamic reward margin instead of a fixed one. This dynamic margin adapts to the specific differences between response pairs, improving the model's ability to learn from human feedback. Unlike previous methods like DPO and SimPO, \u03b1-DPO balances alignment and diversity through KL divergence control.",
            "paper-title": "$\\alpha$-DPO: Adaptive Reward Margin is What Direct Preference Optimization Needs",
            "image-path": "flux_paper_image/2410.10148_1729026674.png"
        },

        {
            "startTime": "06:53",
            "arxivId": "2410.10696",
            "arxivLink": "https://arxiv.org/abs/2410.10696",
            "title": "Speaking Avatars Get a Body: Diffusion Model Makes Them Move!",
            "institute": "Tsinghua University, University of Science and Technology of China, Baidu Inc....",
            "text": "This research proposes a new framework called TALK-Act that enhances textural awareness in diffusion models for 2D speaking avatar reenactment. Unlike previous methods that focus primarily on facial animation, TALK-Act explicitly controls the torso and gesture movements of the avatar, achieving high-fidelity results with only short footage of a single-view video.",
            "paper-title": "TALK-Act: Enhance Textural-Awareness for 2D Speaking Avatar Reenactment with Diffusion Model",
            "image-path": "flux_paper_image/2410.10696_1729030299.png"
        },

        {
            "startTime": "07:15",
            "arxivId": "2410.10733",
            "arxivLink": "https://arxiv.org/abs/2410.10733",
            "title": "Diffusion Models Get a Speed Boost: Deep Compression Autoencoder Makes High-Res Images a Breeze!",
            "institute": "Nvidia, MIT",
            "text": "This research introduces a new type of autoencoder called DC-AE, which focuses on increasing the spatial compression ratio of images, unlike previous work that primarily focused on improving the reconstruction accuracy of autoencoders with a fixed compression ratio.",
            "paper-title": "Deep Compression Autoencoder for Efficient High-Resolution Diffusion Models",
            "image-path": "flux_paper_image/2410.10733_1729025826.png"
        },

        {
            "startTime": "07:40",
            "arxivId": "2410.10254",
            "arxivLink": "https://arxiv.org/abs/2410.10254",
            "title": "LLMs: Linearized, Low-Rank, and Ready to Rumble!",
            "institute": "Stanford University",
            "text": "This paper proposes a new method called LoLCATs for linearizing large language models (LLMs). Unlike previous methods that train all model parameters, LoLCATs uses a two-step approach: first, it trains linear attention layers to approximate the original softmax attention, and then it fine-tunes only the linear attention projections using low-rank adaptation (LoRA). This approach significantly reduces the training cost and allows for linearizing much larger LLMs.",
            "paper-title": "LoLCATs: On Low-Rank Linearizing of Large Language Models",
            "image-path": "flux_paper_image/2410.10254_1729030014.png"
        },

        {
            "startTime": "08:13",
            "arxivId": "2410.09432",
            "arxivLink": "https://arxiv.org/abs/2410.09432",
            "title": "FedEx-LoRA: Delivering Exact Updates for Federated Fine-Tuning of LLMs",
            "institute": "Mohamed bin Zayed University of Artificial Intelligence, Massachusetts Institute of Technology",
            "text": "This paper proposes FedEx-LoRA, a method for federated fine-tuning of large language models (LLMs) that addresses the issue of inexact updates caused by traditional federated averaging of low-rank adapters. Unlike previous methods, FedEx-LoRA incorporates an error residual term into the pretrained weight matrix, ensuring exact aggregation without compromising efficiency.",
            "paper-title": "Exact Aggregation for Federated and Efficient Fine-Tuning of Foundation Models",
            "image-path": "flux_paper_image/2410.09432_1729026323.png"
        },

        {
            "startTime": "08:36",
            "arxivId": "2410.09949",
            "arxivLink": "https://arxiv.org/abs/2410.09949",
            "title": "AI vs. Fake News: Can Personalized Explanations Save Democracy?",
            "institute": "University of California Los Angeles, Massachusetts Institute of Technology, Dartmouth College",
            "text": "This research explores the use of personalized explanations generated by large language models (LLMs) to combat misinformation on social media. Unlike previous work that focused on generic fact-checking labels, this study investigates the impact of tailoring explanations to individual users' demographics and beliefs.",
            "paper-title": "MisinfoEval: Generative AI in the Era of\"Alternative Facts\"",
            "image-path": "flux_paper_image/2410.09949_1729029821.png"
        },

        {
            "startTime": "09:01",
            "arxivId": "2410.09486",
            "arxivLink": "https://arxiv.org/abs/2410.09486",
            "title": "Safe RL: Learning to Drive Without Crashing (and Getting to the Destination!)",
            "institute": "ETH Zurich",
            "text": "This research introduces ACTSAFE, a model-based reinforcement learning algorithm that guarantees safety during exploration in continuous state-action spaces. Unlike previous methods that explicitly maintain a safe set of policies, ACTSAFE implicitly defines and expands this set by learning an uncertainty-aware dynamics model.",
            "paper-title": "ActSafe: Active Exploration with Safety Constraints for Reinforcement Learning",
            "image-path": "flux_paper_image/2410.09486_1729025888.png"
        },

        {
            "startTime": "09:25",
            "arxivId": "2410.09207",
            "arxivLink": "https://arxiv.org/abs/2410.09207",
            "title": "LLMs Get a Logic Lesson: New Dataset Teaches AI to Think Like Humans",
            "institute": "Yale University, Harvard University, NVIDIA...",
            "text": "This research introduces P-FOLIO, a dataset of human-written reasoning chains for logical reasoning problems. Unlike previous datasets, P-FOLIO features more complex and diverse reasoning patterns, including 31 types of inference rules, and proofs with up to 20 steps.",
            "paper-title": "P-FOLIO: Evaluating and Improving Logical Reasoning with Abundant Human-Written Reasoning Chains",
            "image-path": "flux_paper_image/2410.09207_1729026733.png"
        },

        {
            "startTime": "09:46",
            "arxivId": "2410.10735",
            "arxivLink": "https://arxiv.org/abs/2410.10735",
            "title": "LLMs Learn to Think Twice: Self-Correcting AI for Math Mastery",
            "institute": "Tsinghua University, Chinese Academy of Sciences, University of Science and Technology of China",
            "text": "This research introduces a novel mechanism called Chain of Self-Correction (CoSC) that embeds self-correction as an inherent ability in LLMs. Unlike previous work that focuses on single-round reasoning or external tools for correction, CoSC enables LLMs to iteratively refine their reasoning steps through multiple self-correction stages.",
            "paper-title": "Embedding Self-Correction as an Inherent Ability in Large Language Models for Enhanced Mathematical Reasoning",
            "image-path": "flux_paper_image/2410.10735_1729028187.png"
        },

        {
            "startTime": "10:10",
            "arxivId": "2410.10473",
            "arxivLink": "https://arxiv.org/abs/2410.10473",
            "title": "Clean Labels, Dirty Tricks: How AI Models Can Be Poisoned With Good Data",
            "institute": "Tel Aviv University, Princeton University",
            "text": "This research focuses on the implicit bias of structured state space models (SSMs), a type of neural network gaining popularity. Unlike previous work that assumed infinite training data, this paper explores the realistic scenario of finite training sets and demonstrates that adding a single, correctly labeled sequence can disrupt the model's ability to generalize.",
            "paper-title": "The Implicit Bias of Structured State Space Models Can Be Poisoned With Clean Labels",
            "image-path": "flux_paper_image/2410.10473_1729027710.png"
        },

        {
            "startTime": "10:35",
            "arxivId": "2410.10118",
            "arxivLink": "https://arxiv.org/abs/2410.10118",
            "title": "Molecules Need a Physics Lesson: New AI Learns to Bridge Data Gaps",
            "institute": "Microsoft",
            "text": "This research introduces consistency training, a novel approach that leverages physical laws to bridge the gap between heterogeneous molecular data in multi-task learning. Unlike previous work that relies solely on shared encoders, this method directly connects decoders by enforcing physical constraints between tasks.",
            "paper-title": "Physical Consistency Bridges Heterogeneous Data in Molecular Multi-Task Learning",
            "image-path": "flux_paper_image/2410.10118_1729025875.png"
        },

        {
            "startTime": "10:56",
            "arxivId": "2410.09841",
            "arxivLink": "https://arxiv.org/abs/2410.09841",
            "title": "Neural Networks: Symmetry Sleuths Unmask Hidden Patterns!",
            "institute": "Peking University",
            "text": "This research proposes a method called LieSD to discover symmetries in data using trained neural networks. Unlike previous methods that rely on prior knowledge of symmetries or data augmentation, LieSD directly solves the Lie algebra space using the inputs, outputs, and gradients of the trained network.",
            "paper-title": "Symmetry Discovery for Different Data Types",
            "image-path": "flux_paper_image/2410.09841_1729025989.png"
        },

        {
            "startTime": "11:18",
            "arxivId": "2410.10803",
            "arxivLink": "https://arxiv.org/abs/2410.10803",
            "title": "Humanoid Robots Learn New Tricks (Without the Camera Drama)",
            "institute": "Stanford University, Simon Fraser University, UPenn...",
            "text": "This research introduces the Improved 3D Diffusion Policy (iDP3), a 3D visuomotor policy that uses egocentric 3D representations, eliminating the need for camera calibration and point cloud segmentation. This allows for more generalizable manipulation skills on humanoid robots.",
            "paper-title": "Generalizable Humanoid Manipulation with Improved 3D Diffusion Policies",
            "image-path": "flux_paper_image/2410.10803_1729026356.png"
        },

        {
            "startTime": "11:48",
            "arxivId": "2410.09141",
            "arxivLink": "https://arxiv.org/abs/2410.09141",
            "title": "Long-Context Language Models: A Retrieval-Based Shortcut to Superhuman Understanding",
            "institute": "CMU, University of Illinois",
            "text": "This research proposes a novel approach called ACER (Automatic Context Extension via Retrieval) to train long-context language models without relying on large amounts of human-annotated data. ACER leverages a retrieval pipeline to synthesize training data by combining short-context models with a retrieval mechanism, effectively bootstrapping the model's long-context capabilities.",
            "paper-title": "ACER: Automatic Language Model Context Extension via Retrieval",
            "image-path": "flux_paper_image/2410.09141_1729029391.png"
        },

        {
            "startTime": "12:14",
            "arxivId": "2410.10101",
            "arxivLink": "https://arxiv.org/abs/2410.10101",
            "title": "Transformers Learn to Think Like Machines, But Can They Learn to Learn?",
            "institute": "MIT, TU Munich",
            "text": "This research focuses on the learnability of Transformers, specifically single-layer Transformers with linear attention. Unlike previous work that focused on expressivity, this paper provides polynomial-time learnability results and introduces a certificate of identifiability for datasets.",
            "paper-title": "Learning Linear Attention in Polynomial Time",
            "image-path": "flux_paper_image/2410.10101_1729029645.png"
        },

        {
            "startTime": "12:35",
            "arxivId": "2410.10796",
            "arxivLink": "https://arxiv.org/abs/2410.10796",
            "title": "Instruction Tuning: A Case of Contextual Amnesia?",
            "institute": "CMU",
            "text": "This research identifies a phenomenon called \"context-parametric inversion\" where instruction tuning, while initially improving context reliance, eventually leads to a decrease in the model's ability to prioritize user-provided context over its own internal knowledge. This contrasts with previous work that primarily focused on mitigating knowledge conflicts through training-free approaches or finetuning on counterfactual datasets.",
            "paper-title": "Context-Parametric Inversion: Why Instruction Finetuning May Not Actually Improve Context Reliance",
            "image-path": "flux_paper_image/2410.10796_1729030087.png"
        },

        {
            "startTime": "13:02",
            "arxivId": "2410.09375",
            "arxivLink": "https://arxiv.org/abs/2410.09375",
            "title": "ReLU-MLPs: The Simple Secret to Programmable Computers?",
            "institute": "University of Hong Kong, University of Wisconsin-Madison, Tsinghua University...",
            "text": "This paper demonstrates that a looped 23-layer ReLU-MLP can function as a programmable computer, unlike previous work that used Transformers for this purpose.",
            "paper-title": "Looped ReLU MLPs May Be All You Need as Practical Programmable Computers",
            "image-path": "flux_paper_image/2410.09375_1729026430.png"
        },

        {
            "startTime": "13:25",
            "arxivId": "2410.09087",
            "arxivLink": "https://arxiv.org/abs/2410.09087",
            "title": "The Great Interpretability Divide: When \"Mechanistic\" Means More Than Just Mechanisms",
            "institute": "Harvard University",
            "text": "This paper examines the evolution of the term \"mechanistic interpretability\" in the field of language model (LM) research, highlighting how its meaning has shifted from a technical definition focused on causal mechanisms to a broader cultural label encompassing a specific community of researchers.",
            "paper-title": "Mechanistic?",
            "image-path": "flux_paper_image/2410.09087_1729027675.png"
        },

        {
            "startTime": "13:48",
            "arxivId": "2410.09187",
            "arxivLink": "https://arxiv.org/abs/2410.09187",
            "title": "LLMs: Not Just Chatbots, Now They're Reward Engineers!",
            "institute": "Stanford University",
            "text": "This research proposes a new approach to automated reward engineering using LLMs. Instead of directly generating reward functions, it focuses on generating \"progress functions\" that estimate task progress. These progress functions are then used to create a simplified state space for count-based intrinsic rewards, leading to more efficient policy learning.",
            "paper-title": "Automated Rewards via LLM-Generated Progress Functions",
            "image-path": "flux_paper_image/2410.09187_1729029514.png"
        },

        {
            "startTime": "14:22",
            "arxivId": "2410.09345",
            "arxivLink": "https://arxiv.org/abs/2410.09345",
            "title": "Social Media Popularity: It's Not Just About the Content, It's About the Crowd!",
            "institute": "Tsinghua University",
            "text": "This research introduces the concept of \"implicit social factors\" in predicting social media post popularity. Unlike previous work that focused on content features, this study explores how user influence, content relevance, and user identity impact a post's reach.",
            "paper-title": "Contrastive Learning for Implicit Social Factors in Social Media Popularity Prediction",
            "image-path": "flux_paper_image/2410.09345_1729028740.png"
        },

        {
            "startTime": "14:49",
            "arxivId": "2410.10588",
            "arxivLink": "https://arxiv.org/abs/2410.10588",
            "title": "TRESTLE: A Model That Learns Like You, But With More Blocks!",
            "institute": "CMU",
            "text": "This research introduces TRESTLE, a model that learns concepts incrementally, unlike many other models that learn in a batch fashion. TRESTLE also handles multiple types of information, including nominal, numeric, relational, and component attributes, which is a unique feature compared to previous models.",
            "paper-title": "TRESTLE: A Model of Concept Formation in Structured Domains",
            "image-path": "flux_paper_image/2410.10588_1729026980.png"
        },

        {
            "startTime": "15:13",
            "arxivId": "2410.09342",
            "arxivLink": "https://arxiv.org/abs/2410.09342",
            "title": "LLMs Go Big: MapReduce Makes Long Texts a Breeze!",
            "institute": "Xiamen University, Peking University, Nankai University...",
            "text": "This paper proposes a training-free framework called LLM\u00d7 MapReduce for processing long texts. Unlike previous methods that rely on fine-tuning or sliding window attention, LLM\u00d7 MapReduce splits the text into chunks, processes them independently, and then aggregates the results using a structured information protocol and in-context confidence calibration.",
            "paper-title": "LLM$\\times$MapReduce: Simplified Long-Sequence Processing using Large Language Models",
            "image-path": "flux_paper_image/2410.09342_1729030047.png"
        },

        {
            "startTime": "15:43",
            "arxivId": "2410.09940",
            "arxivLink": "https://arxiv.org/abs/2410.09940",
            "title": "Data Attribution Gets a Group Hug: Faster, More Efficient, and Still Accurate!",
            "institute": "Harvard University",
            "text": "This paper introduces a new framework called Generalized Group Data Attribution (GGDA) that simplifies data attribution by attributing to groups of training points instead of individual ones. This approach significantly reduces computational costs, making it more practical for large-scale machine learning models.",
            "paper-title": "Generalized Group Data Attribution",
            "image-path": "flux_paper_image/2410.09940_1729029677.png"
        },

        {
            "startTime": "16:05",
            "arxivId": "2410.10760",
            "arxivLink": "https://arxiv.org/abs/2410.10760",
            "title": "LLMs: Not So Smart After All? New Attack Makes Them Repeat Themselves!",
            "institute": "SEA Group, Tsinghua University",
            "text": "This research explores a new type of denial-of-service (DoS) attack on large language models (LLMs) that involves poisoning the training data. Unlike previous DoS attacks that rely on manipulating input prompts, this method targets the model's learning process, making it vulnerable to malicious instructions even when presented with seemingly harmless inputs.",
            "paper-title": "Denial-of-Service Poisoning Attacks against Large Language Models",
            "image-path": "flux_paper_image/2410.10760_1729027393.png"
        },

        {
            "startTime": "16:28",
            "arxivId": "2410.10316",
            "arxivLink": "https://arxiv.org/abs/2410.10316",
            "title": "Vision Mambas Get a Frequency Makeover: GlobalMamba Sees the Big Picture!",
            "institute": "Tsinghua University",
            "text": "This research proposes a new method for image serialization called GlobalMamba, which transforms images into a sequence of tokens based on their frequency spectrum. Unlike previous methods that flatten image tokens into a 1D sequence, GlobalMamba preserves the inherent causal relationships between tokens by arranging them in ascending order of frequency.",
            "paper-title": "GlobalMamba: Global Image Serialization for Vision Mamba",
            "image-path": "flux_paper_image/2410.10316_1729029218.png"
        },

        {
            "startTime": "17:00",
            "arxivId": "2410.10382",
            "arxivLink": "https://arxiv.org/abs/2410.10382",
            "title": "Mamba's 2D Vision: How a Snake-Inspired Model Learned to See in 2D!",
            "institute": "Tsinghua University",
            "text": "This research proposes a Visual 2-Dimensional Mamba (V2M) model, which directly processes image tokens in 2D space, unlike previous methods that flattened images into 1D sequences.",
            "paper-title": "V2M: Visual 2-Dimensional Mamba for Image Representation Learning",
            "image-path": "flux_paper_image/2410.10382_1729027264.png"
        },

        {
            "startTime": "17:27",
            "arxivId": "2410.10792",
            "arxivLink": "https://arxiv.org/abs/2410.10792",
            "title": "Rectified Flows: Turning Noise into Art, One Controlled ODE at a Time!",
            "institute": "University of Texas at Austin, Google",
            "text": "This paper introduces a novel method for inverting and editing images using rectified flows, a powerful alternative to diffusion models. Unlike previous approaches that rely on training additional parameters or optimizing latent variables, this method utilizes a controlled ODE to achieve zero-shot inversion and editing.",
            "paper-title": "Semantic Image Inversion and Editing using Rectified Stochastic Differential Equations",
            "image-path": "flux_paper_image/2410.10792_1729026001.png"
        },

        {
            "startTime": "17:44",
            "arxivId": "2410.09088",
            "arxivLink": "https://arxiv.org/abs/2410.09088",
            "title": "Action Recognition: A Multimodal Mashup for Video Understanding!",
            "institute": "Nanjing University of Science and Technology, University of Toronto",
            "text": "This research introduces a novel approach to temporal action localization by combining both video and audio features, leveraging the strengths of both modalities for more accurate action detection. This differs from previous work that primarily focused on either video or audio features.",
            "paper-title": "The Solution for Temporal Action Localisation Task of Perception Test Challenge 2024",
            "image-path": "flux_paper_image/2410.09088_1729028702.png"
        },

        {
            "startTime": "18:09",
            "arxivId": "2410.10799",
            "arxivLink": "https://arxiv.org/abs/2410.10799",
            "title": "Can 2D AI See in 3D? New Benchmark Tests Vision Models' Depth Perception!",
            "institute": "Princeton University",
            "text": "This research introduces a new benchmark specifically designed to evaluate the 3D understanding capabilities of vision-language models (VLMs) and specialized models. Unlike previous benchmarks that focus on 2D tasks, this one tests models on tasks like depth estimation, spatial reasoning, camera pose estimation, and keypoint matching.",
            "paper-title": "Towards Foundation Models for 3D Vision: How Close Are We?",
            "image-path": "flux_paper_image/2410.10799_1729027070.png"
        },

        {
            "startTime": "18:28",
            "arxivId": "2410.10516",
            "arxivLink": "https://arxiv.org/abs/2410.10516",
            "title": "Molecule Generation Gets a Boost: New Model Makes Drug Discovery a Two-Step Dance!",
            "institute": "Tsinghua University",
            "text": "This research proposes a novel two-phase generative process for molecular generation, where property prediction is incorporated only after the molecular scaffold is formed. This approach differs from previous work that typically combines generation and prediction tasks throughout the entire diffusion process.",
            "paper-title": "UniGEM: A Unified Approach to Generation and Property Prediction for Molecules",
            "image-path": "flux_paper_image/2410.10516_1729028420.png"
        },

        {
            "startTime": "18:53",
            "arxivId": "2410.10630",
            "arxivLink": "https://arxiv.org/abs/2410.10630",
            "title": "LLMs Learn to Think Before They Speak: No More Dumb Answers!",
            "institute": "Meta, University of California Berkeley, New York University",
            "text": "This research introduces a new training method called Thought Preference Optimization (TPO) that teaches LLMs to generate internal thoughts before responding to user instructions. Unlike previous methods that rely on supervised training data, TPO uses an iterative process that optimizes thoughts based on the quality of the responses they produce.",
            "paper-title": "Thinking LLMs: General Instruction Following with Thought Generation",
            "image-path": "flux_paper_image/2410.10630_1729025995.png"
        },

        {
            "startTime": "19:16",
            "arxivId": "2410.10452",
            "arxivLink": "https://arxiv.org/abs/2410.10452",
            "title": "AI Gets a Helping Hand: New Algorithm Leverages Human Expertise for Faster Optimization",
            "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne, University of Oxford",
            "text": "This research introduces a novel Bayesian optimization algorithm that incorporates human expert feedback in the form of binary labels. Unlike previous methods that rely on predefined trust levels, this approach dynamically adjusts trust based on the expert's performance, ensuring robustness even when the expert's advice is unreliable.",
            "paper-title": "Principled Bayesian Optimisation in Collaboration with Human Experts",
            "image-path": "flux_paper_image/2410.10452_1729027604.png"
        },

        {
            "startTime": "19:38",
            "arxivId": "2410.09303",
            "arxivLink": "https://arxiv.org/abs/2410.09303",
            "title": "Tokenized Models: They're Not as Smart as They Seem!",
            "institute": "University of Toronto, Meta",
            "text": "This paper explores the impact of tokenization on language models, demonstrating that even when tokenized and byte-level models are statistically equivalent, their predictive behaviors can differ significantly. The authors introduce the concept of \"tokenization bias\" to describe this discrepancy and propose a method to convert tokenized models into statistically equivalent byte-level models without retraining.",
            "paper-title": "Exact Byte-Level Probabilities from Tokenized Language Models for FIM-Tasks and Model Ensembles",
            "image-path": "flux_paper_image/2410.09303_1729028956.png"
        },

        {
            "startTime": "19:58",
            "arxivId": "2410.09563",
            "arxivLink": "https://arxiv.org/abs/2410.09563",
            "title": "Optical Flow's New Trick: Taylor Series to the Rescue!",
            "institute": "CMU",
            "text": "This research proposes a novel optical flow computation algorithm that utilizes the higher precision of second-order Taylor series approximation within the differential estimation framework. This approach aims to extract more information about the behavior of the function under complex real-world scenarios and estimate the motion of areas with a lack of texture.",
            "paper-title": "Robust Optical Flow Computation: A Higher-Order Differential Approach",
            "image-path": "flux_paper_image/2410.09563_1729026885.png"
        },

        {
            "startTime": "20:17",
            "arxivId": "2410.10594",
            "arxivLink": "https://arxiv.org/abs/2410.10594",
            "title": "Vision-Based RAG: Seeing is Believing, Even for AI!",
            "institute": "Tsinghua University",
            "text": "This research introduces VisRAG, a retrieval-augmented generation (RAG) system that directly processes document images using vision-language models (VLMs) instead of relying on text-based retrieval and generation. This approach eliminates the need for a separate parsing stage, which can introduce errors and information loss.",
            "paper-title": "VisRAG: Vision-based Retrieval-augmented Generation on Multi-modality Documents",
            "image-path": "flux_paper_image/2410.10594_1729030002.png"
        },

        {
            "startTime": "20:43",
            "arxivId": "2410.10818",
            "arxivLink": "https://arxiv.org/abs/2410.10818",
            "title": "Video Models: Can They Tell Time? TemporalBench Tests Their Temporal Reasoning Skills!",
            "institute": "University of Wisconsin-Madison, Microsoft Research, Ohio State University...",
            "text": "This research introduces TemporalBench, a new benchmark for evaluating multimodal video models' ability to understand fine-grained temporal dynamics in videos. Unlike existing benchmarks that rely on coarse-grained annotations, TemporalBench uses detailed human-annotated captions to assess models' understanding of actions and events unfolding over time.",
            "paper-title": "TemporalBench: Benchmarking Fine-grained Temporal Understanding for Multimodal Video Models",
            "image-path": "flux_paper_image/2410.10818_1729029809.png"
        },

        {
            "startTime": "21:13",
            "arxivId": "2410.09132",
            "arxivLink": "https://arxiv.org/abs/2410.09132",
            "title": "Graphing with a Multimodal Twist: A New Benchmark for Learning on Complex Networks",
            "institute": "Central South University, Microsoft Research Asia, Hong Kong University of Science and Technology...",
            "text": "This research introduces a new benchmark dataset, MAGB, specifically designed for multimodal attributed graphs (MAGs). Unlike previous datasets that focus on unimodal graphs, MAGB includes both textual and visual attributes, allowing researchers to explore the integration of multimodal information with graph topology.",
            "paper-title": "When Graph meets Multimodal: Benchmarking on Multimodal Attributed Graphs Learning",
            "image-path": "flux_paper_image/2410.09132_1729025721.png"
        },

        {
            "startTime": "21:43",
            "arxivId": "2410.09733",
            "arxivLink": "https://arxiv.org/abs/2410.09733",
            "title": "VLMs: Can They Count? A New Benchmark Tests Their Compositional Smarts!",
            "institute": "University of Rochester, Apple Inc., Microsoft",
            "text": "This research introduces MMCOMPOSITION, a new benchmark specifically designed to evaluate the compositional abilities of vision-language models (VLMs). Unlike previous benchmarks that focus on object, relation, and attribute recognition, MMCOMPOSITION delves deeper into complex reasoning about object interactions, counting, and complex compositions.",
            "paper-title": "MMCOMPOSITION: Revisiting the Compositionality of Pre-trained Vision-Language Models",
            "image-path": "flux_paper_image/2410.09733_1729030216.png"
        },

        {
            "startTime": "22:07",
            "arxivId": "2410.10368",
            "arxivLink": "https://arxiv.org/abs/2410.10368",
            "title": "Graph Kernels Go Linear: A Random Walk Through Sparse Graphs",
            "institute": "Google, University of Cambridge",
            "text": "This paper presents the first linear time complexity algorithm for approximating general random walk kernels (RWKs) on sparse graphs. Previous methods were at best cubic time complexity and not applicable to labelled graphs.",
            "paper-title": "Optimal Time Complexity Algorithms for Computing General Random Walk Graph Kernels on Sparse Graphs",
            "image-path": "flux_paper_image/2410.10368_1729026549.png"
        },

        {
            "startTime": "22:26",
            "arxivId": "2410.09642",
            "arxivLink": "https://arxiv.org/abs/2410.09642",
            "title": "RepMatch: Unmasking Dataset Secrets with Low-Rank Magic!",
            "institute": "University of Cambridge",
            "text": "This paper introduces RepMatch, a method that quantifies the similarity between subsets of training data by comparing the representation spaces of models trained on those subsets. Unlike previous methods that focus on individual instances or within-dataset analysis, RepMatch enables cross-dataset comparisons and analysis of arbitrary subsets.",
            "paper-title": "RepMatch: Quantifying Cross-Instance Similarities in Representation Space",
            "image-path": "flux_paper_image/2410.09642_1729026203.png"
        },

        {
            "startTime": "22:45",
            "arxivId": "2410.10116",
            "arxivLink": "https://arxiv.org/abs/2410.10116",
            "title": "Random Unitaries: They're Not Just for Black Holes Anymore!",
            "institute": "Google, Caltech",
            "text": "This paper presents the first proof that pseudorandom unitaries (PRUs) exist, assuming the existence of any quantum-secure one-way function. This is a significant advancement as previous work had only established the existence of weaker notions of PRUs. The key idea is to use a \"path-recording\" oracle to simulate the behavior of a Haar-random unitary.",
            "paper-title": "How to Construct Random Unitaries",
            "image-path": "flux_paper_image/2410.10116_1729027885.png"
        },

        {
            "startTime": "23:18",
            "arxivId": "2410.10596",
            "arxivLink": "https://arxiv.org/abs/2410.10596",
            "title": "Neural Networks Learn to Learn: Practice Makes Perfect, Even for AI!",
            "institute": "Harvard University, NYU",
            "text": "This research introduces a new framework for training neural networks that focuses on providing them with explicit incentives and opportunities to practice the desired behavior. This differs from previous approaches that relied on generalizing from related but different objectives.",
            "paper-title": "Neural networks that overcome classic challenges through practice",
            "image-path": "flux_paper_image/2410.10596_1729026792.png"
        },

        {
            "startTime": "23:41",
            "arxivId": "2410.10076",
            "arxivLink": "https://arxiv.org/abs/2410.10076",
            "title": "Video Generation Gets a Reality Check: AI Learns from Real-World Feedback",
            "institute": "Google",
            "text": "This research introduces VideoAgent, a system that refines video plans generated by AI models using feedback from a vision-language model (VLM) and real-world execution. This differs from previous work that directly converts generated videos into control actions without refinement.",
            "paper-title": "VideoAgent: Self-Improving Video Generation",
            "image-path": "flux_paper_image/2410.10076_1729029461.png"
        },

        {
            "startTime": "24:06",
            "arxivId": "2410.09737",
            "arxivLink": "https://arxiv.org/abs/2410.09737",
            "title": "Laplacian Eigenvectors: A Smooth Ride to Stable Graph Representations",
            "institute": "Peking University, MIT, Georgia Institute of Technology",
            "text": "This research proposes a novel method for generating stable and globally expressive graph representations using Laplacian eigenvectors. Unlike previous methods that rely on hard splits of Laplacian eigenvalues, this approach utilizes learnable O(p)-invariant representations for each eigenspace, ensuring better robustness against perturbations.",
            "paper-title": "Towards Stable, Globally Expressive Graph Representations with Laplacian Eigenvectors",
            "image-path": "flux_paper_image/2410.09737_1729028788.png"
        },

        {
            "startTime": "24:31",
            "arxivId": "2410.09671",
            "arxivLink": "https://arxiv.org/abs/2410.09671",
            "title": "OpenR: LLMs Get Brainy with Step-by-Step Thinking!",
            "institute": "University College London, University of Liverpool, Shanghai Jiao Tong University...",
            "text": "This research introduces OpenR, an open-source framework that focuses on improving the reasoning capabilities of large language models (LLMs) by integrating test-time computation, reinforcement learning, and process supervision. This differs from previous work that primarily focused on scaling model parameters during pre-training.",
            "paper-title": "OpenR: An Open Source Framework for Advanced Reasoning with Large Language Models",
            "image-path": "flux_paper_image/2410.09671_1729027579.png"
        },

        {
            "startTime": "24:56",
            "arxivId": "2410.09821",
            "arxivLink": "https://arxiv.org/abs/2410.09821",
            "title": "3D Anomaly Detection: When Your Potato Has a Bad Hair Day!",
            "institute": "Chinese Academy of Sciences, Microsoft Research, University of Chinese Academy of Sciences...",
            "text": "This research introduces a novel dual-modality anomaly synthesis method for 3D anomaly detection, specifically focusing on depth and RGB images. Unlike previous methods that primarily focused on RGB images or used simplistic depth augmentation, this approach leverages the physical properties of depth data to create more realistic and diverse synthetic anomalies.",
            "paper-title": "DAS3D: Dual-modality Anomaly Synthesis for 3D Anomaly Detection",
            "image-path": "flux_paper_image/2410.09821_1729030491.png"
        },

        {
            "startTime": "25:24",
            "arxivId": "2410.09928",
            "arxivLink": "https://arxiv.org/abs/2410.09928",
            "title": "Manga Music Maestro: AI Composes Soundtracks for Your Favorite Comics!",
            "institute": "University of Tokyo, McGill University, Mohamed bin Zayed University of Artificial Intelligence",
            "text": "This research introduces a novel task of generating background music for manga, a task not previously explored in the literature. The authors propose a multi-modal framework, M2M-Gen, that leverages large language models (LLMs) to translate visual and textual information from manga into music directives.",
            "paper-title": "M2M-Gen: A Multimodal Framework for Automated Background Music Generation in Japanese Manga Using Large Language Models",
            "image-path": "flux_paper_image/2410.09928_1729030100.png"
        },

        {
            "startTime": "25:45",
            "arxivId": "2410.09347",
            "arxivLink": "https://arxiv.org/abs/2410.09347",
            "title": "Goodbye Guidance, Hello Alignment: Visual Generation Gets a Fine-Tuning Makeover!",
            "institute": "Tsinghua University, The University of Hong Kong",
            "text": "This paper proposes Condition Contrastive Alignment (CCA), a fine-tuning method for autoregressive (AR) visual generation models. Unlike previous guidance methods that alter the sampling process, CCA directly fine-tunes pretrained models to fit the desired distribution, eliminating the need for separate unconditional models and reducing sampling costs.",
            "paper-title": "Toward Guidance-Free AR Visual Generation via Condition Contrastive Alignment",
            "image-path": "flux_paper_image/2410.09347_1729025548.png"
        },

        {
            "startTime": "26:07",
            "arxivId": "2410.10088",
            "arxivLink": "https://arxiv.org/abs/2410.10088",
            "title": "Robot Diffusion Transformers: The Recipe for Dexterous Success!",
            "institute": "Carnegie Mellon University, University of California Berkeley",
            "text": "This research introduces a novel architecture called DiT-Block Policy, which combines the scalability of Transformer networks with generative diffusion models for robotic control. This architecture addresses the challenges of training diffusion transformers for robotics tasks, which have previously been difficult to train and prone to instability.",
            "paper-title": "The Ingredients for Robotic Diffusion Transformers",
            "image-path": "flux_paper_image/2410.10088_1729026133.png"
        },

        {
            "startTime": "26:29",
            "arxivId": "2410.09426",
            "arxivLink": "https://arxiv.org/abs/2410.09426",
            "title": "LLMs Get Flattened: New Technique Makes Quantization a Breeze!",
            "institute": "Huawei, Tsinghua University, Chinese University of Hong Kong",
            "text": "This paper proposes FLATQUANT, a post-training quantization method that uses learnable affine transformations to flatten the distribution of weights and activations in LLMs. Unlike previous methods that focus on pre-quantization transformations, FLATQUANT operates after the model has been trained, allowing for more flexibility and better results.",
            "paper-title": "FlatQuant: Flatness Matters for LLM Quantization",
            "image-path": "flux_paper_image/2410.09426_1729029386.png"
        },

        {
            "startTime": "26:53",
            "arxivId": "2410.10083",
            "arxivLink": "https://arxiv.org/abs/2410.10083",
            "title": "LLMs Go Beyond the Pair: Can They Handle Hypergraphs?",
            "institute": "Xi\u2019an Jiaotong University, Shanghai University, Guangdong University of Technology...",
            "text": "This research introduces LLM4Hypergraph, a benchmark specifically designed to evaluate LLMs' ability to understand and reason with hypergraphs, which are data structures that model complex relationships beyond pairwise connections. This differs from existing benchmarks that primarily focus on pairwise relationships within graphs.",
            "paper-title": "Beyond Graphs: Can Large Language Models Comprehend Hypergraphs?",
            "image-path": "flux_paper_image/2410.10083_1729030314.png"
        },

        {
            "startTime": "27:19",
            "arxivId": "2410.10048",
            "arxivLink": "https://arxiv.org/abs/2410.10048",
            "title": "Time Series Learning: Say Goodbye to False Negatives!",
            "institute": "University of Cambridge, University of Melbourne",
            "text": "This research introduces StatioCL, a contrastive learning framework for time series data that addresses the issue of false negative pairs (FNPs) by incorporating non-stationarity and temporal dependency into the pair construction process. Unlike previous methods that rely on random selection of negative pairs, StatioCL leverages the inherent characteristics of time series data to create more accurate and reliable representations.",
            "paper-title": "StatioCL: Contrastive Learning for Time Series via Non-Stationary and Temporal Contrast",
            "image-path": "flux_paper_image/2410.10048_1729028560.png"
        },

        {
            "startTime": "27:46",
            "arxivId": "2410.10179",
            "arxivLink": "https://arxiv.org/abs/2410.10179",
            "title": "LLMs: Forgetfulness Fixed? New Method Says \"No Collision, No Problem!\"",
            "institute": "Peking University",
            "text": "This research proposes a new method called Non-collision Low-Rank Adaptation (N-LoRA) for continual learning in LLMs. Unlike previous methods that focused on orthogonalizing parameter spaces, N-LoRA emphasizes minimizing parameter collisions by introducing sparsity constraints.",
            "paper-title": "Is Parameter Collision Hindering Continual Learning in LLMs?",
            "image-path": "flux_paper_image/2410.10179_1729030478.png"
        },

        {
            "startTime": "28:09",
            "arxivId": "2410.10719",
            "arxivLink": "https://arxiv.org/abs/2410.10719",
            "title": "4D Language Field: Giving Videos a Voice, One Gaussian at a Time!",
            "institute": "Tel Aviv University, Google Research",
            "text": "This research embeds language features into a dynamic 3D Gaussian Splatting representation, allowing for spatio-temporal localization of events in videos based on text prompts. This differs from previous work by focusing on dynamic scenes and utilizing a video-text model for feature extraction.",
            "paper-title": "4-LEGS: 4D Language Embedded Gaussian Splatting",
            "image-path": "flux_paper_image/2410.10719_1729026472.png"
        },

        {
            "startTime": "28:36",
            "arxivId": "2410.09908",
            "arxivLink": "https://arxiv.org/abs/2410.09908",
            "title": "LoRA-ing Around: A Retrieval-Based Ensemble for Zero-Shot Learning",
            "institute": "Harvard University, University of Georgia",
            "text": "This paper introduces a new method called Retrieval-based Parameter Ensemble (RPE) for zero-shot learning. Unlike traditional fine-tuning, RPE leverages a vectorized database of LoRAs (Low-Rank Adaptation) to adapt models to new tasks without extensive training or labeled data.",
            "paper-title": "Retrieval Instead of Fine-tuning: A Retrieval-based Parameter Ensemble for Zero-shot Learning",
            "image-path": "flux_paper_image/2410.09908_1729026478.png"
        },

        {
            "startTime": "28:59",
            "arxivId": "2410.10676",
            "arxivLink": "https://arxiv.org/abs/2410.10676",
            "title": "Spatial Audio Generation: From Text to Sound, Both Ears Wide Open!",
            "institute": "Hong Kong University of Science and Technology, Beijing University of Posts and Telecommunications, Nanyang Technological University...",
            "text": "This research introduces a new dataset, BEWO-1M, specifically designed for training spatial audio generation models. It includes a large number of audio samples with spatial descriptions, addressing the lack of such data in previous work.",
            "paper-title": "Both Ears Wide Open: Towards Language-Driven Spatial Audio Generation",
            "image-path": "flux_paper_image/2410.10676_1729029803.png"
        },

        {
            "startTime": "29:30",
            "arxivId": "2410.10165",
            "arxivLink": "https://arxiv.org/abs/2410.10165",
            "title": "Attention, Please! LLMs Get a Speed Boost with Half-Space Reporting",
            "institute": "Middle Tennessee State University, University of Hong Kong, University of Wisconsin-Madison...",
            "text": "This research introduces a novel approach to accelerate attention computation in LLMs, particularly for long-context scenarios. It leverages the inherent sparsity within attention mechanisms, both in conventional Softmax attention and ReLU attention, to significantly reduce the running time complexity. The method employs a Half-Space Reporting (HSR) data structure to rapidly identify non-zero or \"massively activated\" entries in the attention matrix.",
            "paper-title": "HSR-Enhanced Sparse Attention Acceleration",
            "image-path": "flux_paper_image/2410.10165_1729026407.png"
        },

        {
            "startTime": "30:02",
            "arxivId": "2410.10150",
            "arxivLink": "https://arxiv.org/abs/2410.10150",
            "title": "LLMs: End-of-Sentence Sabotage! How a Tiny Tweak Can Unlock the Forbidden Door",
            "institute": "Peking University, Westlake University",
            "text": "This research focuses on the role of MLP layers in end-of-sentence inferences, a previously overlooked area in LLM safety. Instead of treating all model components uniformly, the authors examine how these layers specifically contribute to a model's ability to identify and reject harmful prompts.",
            "paper-title": "Jailbreak Instruction-Tuned LLMs via end-of-sentence MLP Re-weighting",
            "image-path": "flux_paper_image/2410.10150_1729028398.png"
        },

        {
            "startTime": "30:30",
            "arxivId": "2410.10190",
            "arxivLink": "https://arxiv.org/abs/2410.10190",
            "title": "String Theory for Optimization: How Language Models Can Find the Best Solutions",
            "institute": "UCLA, Google DeepMind, Google",
            "text": "This research proposes \"Embed-then-Regress,\" a novel approach for Bayesian Optimization that utilizes language models to embed string representations of search space candidates as features for downstream regression. This differs from previous work by enabling the use of free-form string inputs, expanding the applicability of Bayesian Optimization to various domains beyond traditional tabular data.",
            "paper-title": "Predicting from Strings: Language Model Embeddings for Bayesian Optimization",
            "image-path": "flux_paper_image/2410.10190_1729027596.png"
        },

        {
            "startTime": "30:57",
            "arxivId": "2410.10366",
            "arxivLink": "https://arxiv.org/abs/2410.10366",
            "title": "\"Less Labels, More Segmentation: A New Trick for Medical Images\"",
            "institute": "University of Oxford",
            "text": "This research proposes an affinity-graph-guided semi-supervised contrastive learning framework (Semi-AGCL) for medical image segmentation. Unlike previous methods, Semi-AGCL avoids relying on pretext tasks and instead uses an affinity graph to guide the learning process, improving performance with minimal annotations.",
            "paper-title": "Affinity-Graph-Guided Contractive Learning for Pretext-Free Medical Image Segmentation with Minimal Annotation",
            "image-path": "flux_paper_image/2410.10366_1729026958.png"
        },

        {
            "startTime": "31:16",
            "arxivId": "2410.09437",
            "arxivLink": "https://arxiv.org/abs/2410.09437",
            "title": "MTL-LoRA: Giving LLMs a Multi-Task Makeover with Low-Rank Magic!",
            "institute": "Peking University, Nanjing University, Microsoft",
            "text": "This paper introduces MTL-LoRA, a new method for fine-tuning large language models (LLMs) for multiple tasks. Unlike previous approaches, MTL-LoRA incorporates task-specific transformations in the low-rank space, allowing for more effective information sharing between tasks.",
            "paper-title": "MTL-LoRA: Low-Rank Adaptation for Multi-Task Learning",
            "image-path": "flux_paper_image/2410.09437_1729027519.png"
        },

        {
            "startTime": "31:40",
            "arxivId": "2410.10322",
            "arxivLink": "https://arxiv.org/abs/2410.10322",
            "title": "Deep Learning's Secret Bias: Averaging Features Makes It Dumb!",
            "institute": "Peking University, Tsinghua University, UC Berkeley",
            "text": "This paper delves into the implicit bias of gradient descent, specifically focusing on a phenomenon called \"feature averaging.\" Unlike previous work that focused on the limiting behavior of gradient descent, this research provides a detailed analysis of the training dynamics, revealing how gradient descent can lead to non-robust solutions by averaging features instead of learning them individually.",
            "paper-title": "Feature Averaging: An Implicit Bias of Gradient Descent Leading to Non-Robustness in Neural Networks",
            "image-path": "flux_paper_image/2410.10322_1729026441.png"
        },

        {
            "startTime": "32:01",
            "arxivId": "2410.09644",
            "arxivLink": "https://arxiv.org/abs/2410.09644",
            "title": "New Vocabulary for Language Models: Latin Languages Get a Boost!",
            "institute": "University of Maryland, Microsoft, Johns Hopkins University",
            "text": "This research proposes VocADT, a novel method for vocabulary adaptation using adapter modules. Unlike previous approaches that rely on heuristics or external embeddings, VocADT learns the optimal linear combination of existing embeddings while keeping the model's weights fixed.",
            "paper-title": "Adapters for Altering LLM Vocabularies: What Languages Benefit the Most?",
            "image-path": "flux_paper_image/2410.09644_1729030773.png"
        },

        {
            "startTime": "32:26",
            "arxivId": "2410.09678",
            "arxivLink": "https://arxiv.org/abs/2410.09678",
            "title": "Information Exponent: It's Not Just About the Lowest Degree!",
            "institute": "Princeton University",
            "text": "This paper explores multi-index models, where the target function depends on a low-dimensional subspace of the input space. Unlike previous work that focused solely on the lowest degree in the Hermite expansion of the link function, this study demonstrates that considering both second- and higher-order terms can significantly improve the sample complexity of learning.",
            "paper-title": "Learning Orthogonal Multi-Index Models: A Fine-Grained Information Exponent Analysis",
            "image-path": "flux_paper_image/2410.09678_1729029073.png"
        },

        {
            "startTime": "32:47",
            "arxivId": "2410.09724",
            "arxivLink": "https://arxiv.org/abs/2410.09724",
            "title": "LLMs: Overconfident? Reward Calibration to the Rescue!",
            "institute": "CMU, Washington University in St. Louis, UC Berkeley",
            "text": "This research investigates the overconfidence phenomenon in LLMs trained with Reinforcement Learning from Human Feedback (RLHF). Unlike previous work that focused on adjusting model outputs, this study identifies a bias in reward models that favors high-confidence responses, regardless of their accuracy. The authors propose two novel solutions: PPO-M, which calibrates reward models to better align confidence with response quality, and PPO-C, which adjusts reward scores during training based on the model's expressed confidence.",
            "paper-title": "Taming Overconfidence in LLMs: Reward Calibration in RLHF",
            "image-path": "flux_paper_image/2410.09724_1729026414.png"
        },

        {
            "startTime": "33:19",
            "arxivId": "2410.10360",
            "arxivLink": "https://arxiv.org/abs/2410.10360",
            "title": "Parenting LLMs: Teaching AI to Choose Wisely from the Web",
            "institute": "Peking University",
            "text": "This research proposes a novel framework called \"Parenting\" that aims to improve the knowledge selection capabilities of Retrieval-Augmented Language Models (RALMs) by decoupling and optimizing adherence and robustness within the parameter space of LLMs. Unlike previous methods that often struggle to balance these two aspects, Parenting identifies and isolates specific parameter units responsible for each capability and applies tailored fine-tuning strategies.",
            "paper-title": "Parenting: Optimizing Knowledge Selection of Retrieval-Augmented Language Models with Parameter Decoupling and Tailored Tuning",
            "image-path": "flux_paper_image/2410.10360_1729030115.png"
        },

        {
            "startTime": "33:58",
            "arxivId": "2410.10167",
            "arxivLink": "https://arxiv.org/abs/2410.10167",
            "title": "Human Sensing Gets a Multimodal Makeover: X-Fi is the New Foundation Model",
            "institute": "Nanyang Technological University",
            "text": "This research proposes a modality-invariant foundation model, X-Fi, which can handle any combination of sensor modalities without retraining. This differs from previous multi-modal fusion methods that typically require extensive retraining when modalities are added or removed.",
            "paper-title": "X-Fi: A Modality-Invariant Foundation Model for Multimodal Human Sensing",
            "image-path": "flux_paper_image/2410.10167_1729028312.png"
        },

        {
            "startTime": "34:28",
            "arxivId": "2410.09918",
            "arxivLink": "https://arxiv.org/abs/2410.09918",
            "title": "Thinking Fast & Slow: A Transformer Learns to Reason Like Us",
            "institute": "FAIR at Meta",
            "text": "This research introduces Dualformer, a Transformer model trained on randomized reasoning traces. Unlike previous work that either fine-tunes existing models or uses separate networks for fast and slow reasoning, Dualformer integrates both modes into a single model.",
            "paper-title": "Dualformer: Controllable Fast and Slow Thinking by Learning with Randomized Reasoning Traces",
            "image-path": "flux_paper_image/2410.09918_1729025556.png"
        },

        {
            "startTime": "34:59",
            "arxivId": "2410.10578",
            "arxivLink": "https://arxiv.org/abs/2410.10578",
            "title": "RED Pill or Blue Pill? New AI Learns to Take Risks!",
            "institute": "University of Toronto",
            "text": "This research introduces a new framework called RED RL, which allows reinforcement learning algorithms to solve multiple subtasks simultaneously in the average-reward setting. This is different from previous work that focused on episodic and discounted MDPs.",
            "paper-title": "Burning RED: Unlocking Subtask-Driven Reinforcement Learning and Risk-Awareness in Average-Reward Markov Decision Processes",
            "image-path": "flux_paper_image/2410.10578_1729028197.png"
        },

        {
            "startTime": "35:22",
            "arxivId": "2410.10652",
            "arxivLink": "https://arxiv.org/abs/2410.10652",
            "title": "Spatial Niche Sleuth: QueST Uncovers Hidden Tissue Secrets",
            "institute": "Tsinghua University",
            "text": "This research introduces QueST, a model that learns representations of spatial niches, or regions within tissues, rather than just individual cells. This allows for querying across multiple samples, which is a significant advancement over previous methods that focused on single-sample analysis.",
            "paper-title": "QueST: Querying Functional and Structural Niches on Spatial Transcriptomics Data via Contrastive Subgraph Embedding",
            "image-path": "flux_paper_image/2410.10652_1729027906.png"
        },

        {
            "startTime": "35:42",
            "arxivId": "2410.09417",
            "arxivLink": "https://arxiv.org/abs/2410.09417",
            "title": "Elasticity Meets AI: Neural Integration Makes Shapes Bend and Bounce",
            "institute": "Nvidia",
            "text": "This research introduces a novel approach to simulating elasticity on evolving domains by integrating a neural network into the finite element method. Unlike previous methods that rely on fixed quadrature points, this technique uses a neural network to learn quadrature point locations and weights, enabling smooth and differentiable integration even as the domain changes.",
            "paper-title": "Neurally Integrated Finite Elements for Differentiable Elasticity on Evolving Domains",
            "image-path": "flux_paper_image/2410.09417_1729025521.png"
        },

        {
            "startTime": "36:00",
            "arxivId": "2410.09867",
            "arxivLink": "https://arxiv.org/abs/2410.09867",
            "title": "Edge Embeddings: The Secret Sauce for Shallow Graph Networks?",
            "institute": "MIT, CMU, Duke University",
            "text": "This research explores the benefits of maintaining and updating edge embeddings in graph neural networks (GNNs). Unlike previous work that focuses on node embeddings, this paper investigates the representational power of edge-based architectures, particularly under memory constraints.",
            "paper-title": "Towards characterizing the value of edge embeddings in Graph Neural Networks",
            "image-path": "flux_paper_image/2410.09867_1729028087.png"
        },

        {
            "startTime": "36:29",
            "arxivId": "2410.09747",
            "arxivLink": "https://arxiv.org/abs/2410.09747",
            "title": "Self-Driving Cars Get a Brain Tune-Up: New AI Makes Them Smarter and More Resilient",
            "institute": "Shandong University, Southern University of Science and Technology, University of Maryland...",
            "text": "This research introduces t-READi, a system that adapts deep learning models used in autonomous vehicles to handle variations in sensor data and missing modalities. Unlike previous work, t-READi focuses on fine-tuning specific model parameters rather than retraining the entire model, leading to more efficient and robust performance.",
            "paper-title": "t-READi: Transformer-Powered Robust and Efficient Multimodal Inference for Autonomous Driving",
            "image-path": "flux_paper_image/2410.09747_1729029893.png"
        },

        {
            "startTime": "36:56",
            "arxivId": "2410.09604",
            "arxivLink": "https://arxiv.org/abs/2410.09604",
            "title": "City Simulator: AI Agents Go Urban!",
            "institute": "Tsinghua University",
            "text": "This research constructs a benchmark platform for evaluating embodied AI agents in a real-world city environment, unlike previous work that focused on indoor or fictional city settings.",
            "paper-title": "EmbodiedCity: A Benchmark Platform for Embodied Agent in Real-world City Environment",
            "image-path": "flux_paper_image/2410.09604_1729027667.png"
        },

        {
            "startTime": "37:19",
            "arxivId": "2410.10209",
            "arxivLink": "https://arxiv.org/abs/2410.10209",
            "title": "LLMs Get a Speed Boost: New Dataset Makes Code Run Faster and Smarter!",
            "institute": "University of Hong Kong, National University of Singapore, Beijing University of Posts and Telecommunications...",
            "text": "This research focuses on improving the efficiency of code generated by LLMs, a factor often overlooked in previous studies. The paper introduces EFFI-CODE, a dataset specifically designed to fine-tune LLMs for generating more efficient code while maintaining correctness.",
            "paper-title": "Effi-Code: Unleashing Code Efficiency in Language Models",
            "image-path": "flux_paper_image/2410.10209_1729030093.png"
        },

        {
            "startTime": "37:55",
            "arxivId": "2410.09467",
            "arxivLink": "https://arxiv.org/abs/2410.09467",
            "title": "Single Image to 3D: A Frequency-Based Fusion for Better Textures and Geometry",
            "institute": "Amazon Lab126, Carnegie Mellon University, Stony Brook University",
            "text": "This research proposes a novel two-stage approach for generating 3D models from a single image. It combines the strengths of 2D and 3D diffusion models by leveraging frequency-based distillation losses, which allows for both high-quality textures and geometric consistency. This differs from previous methods that either focused on one aspect or struggled to achieve both simultaneously.",
            "paper-title": "Enhancing Single Image to 3D Generation using Gaussian Splatting and Hybrid Diffusion Priors",
            "image-path": "flux_paper_image/2410.09467_1729026847.png"
        },

        {
            "startTime": "38:19",
            "arxivId": "2410.09112",
            "arxivLink": "https://arxiv.org/abs/2410.09112",
            "title": "Citation Prediction: Beyond Simple Links, LLMs Uncover the \"Core\" of Science!",
            "institute": "Tsinghua University",
            "text": "This research introduces the concept of \"core citations,\" which are citations that go beyond superficial mentions and represent the foundational knowledge of a paper. Unlike previous work that treated citation prediction as a binary classification problem, this study distinguishes core citations from superficial citations and non-citations, leading to a more nuanced understanding of citation networks.",
            "paper-title": "HLM-Cite: Hybrid Language Model Workflow for Text-based Scientific Citation Prediction",
            "image-path": "flux_paper_image/2410.09112_1729029915.png"
        },

        {
            "startTime": "38:42",
            "arxivId": "2410.09704",
            "arxivLink": "https://arxiv.org/abs/2410.09704",
            "title": "EchoPrime: AI That Sees Your Heart's Story in Every Beat",
            "institute": "Stanford University",
            "text": "EchoPrime is a multi-view, video-based foundation model for echocardiography, trained on over 12 million video-report pairs. Unlike previous models, it synthesizes information from multiple views captured during a full exam, enabling comprehensive interpretation.",
            "paper-title": "EchoPrime: A Multi-Video View-Informed Vision-Language Model for Comprehensive Echocardiography Interpretation",
            "image-path": "flux_paper_image/2410.09704_1729029337.png"
        },

        {
            "startTime": "39:04",
            "arxivId": "2410.10037",
            "arxivLink": "https://arxiv.org/abs/2410.10037",
            "title": "GALA: 3D Shapes Get a Geometry-Aware Makeover!",
            "institute": "Simon Fraser University, ETH Zurich",
            "text": "This paper introduces GALA, a novel 3D shape representation that uses geometry-aware local adaptive grids. Unlike previous methods that rely on uniform grids or isotropic scaling, GALA adapts the grid orientation and scaling to the local geometry, enabling more efficient and accurate representation of complex shapes.",
            "paper-title": "GALA: Geometry-Aware Local Adaptive Grids for Detailed 3D Generation",
            "image-path": "flux_paper_image/2410.10037_1729027795.png"
        },

        {
            "startTime": "39:22",
            "arxivId": "2410.10584",
            "arxivLink": "https://arxiv.org/abs/2410.10584",
            "title": "Knowledge Base Editing: Giving LLMs a Brain Transplant with Feedback!",
            "institute": "Microsoft",
            "text": "This research introduces STACKFEED, a novel approach to knowledge base editing that uses expert feedback to refine the knowledge base without requiring access to the LLM's parameters. This differs from previous work that either updates model parameters or adds new parameters, which often require white-box access to the LLM.",
            "paper-title": "STACKFEED: Structured Textual Actor-Critic Knowledge Base Editing with FeedBack",
            "image-path": "flux_paper_image/2410.10584_1729028027.png"
        },

        {
            "startTime": "39:47",
            "arxivId": "2410.10774",
            "arxivLink": "https://arxiv.org/abs/2410.10774",
            "title": "Cavia: The Camera-Wielding Video Wizard That Makes Multi-View Magic!",
            "institute": "University of Texas at Austin, Apple, Google",
            "text": "This research introduces Cavia, a framework that extends a monocular video generator to produce multi-view consistent videos with precise camera control. Unlike previous methods that focus on monocular video generation or struggle with complex scenes, Cavia utilizes view-integrated attention modules to enhance consistency across viewpoints and frames.",
            "paper-title": "Cavia: Camera-controllable Multi-view Video Diffusion with View-Integrated Attention",
            "image-path": "flux_paper_image/2410.10774_1729025905.png"
        },

        {
            "startTime": "40:12",
            "arxivId": "2410.09361",
            "arxivLink": "https://arxiv.org/abs/2410.09361",
            "title": "Safe Policy Improvement: When to Trust the Robot, When to Trust Yourself!",
            "institute": "Harvard University, Imperial College",
            "text": "This research introduces Decision Points RL (DPRL), an algorithm that restricts policy improvements to specific state-action pairs observed frequently in the dataset. This approach differs from previous methods by not requiring knowledge of the behavior policy and offering tighter theoretical guarantees.",
            "paper-title": "Decision-Point Guided Safe Policy Improvement",
            "image-path": "flux_paper_image/2410.09361_1729028542.png"
        },

        {
            "startTime": "40:34",
            "arxivId": "2410.10807",
            "arxivLink": "https://arxiv.org/abs/2410.10807",
            "title": "Neural Networks Get a Hard Constraint Makeover: No More Cheating!",
            "institute": "MIT",
            "text": "This research introduces HardNet, a framework that enforces hard constraints on neural networks without sacrificing their ability to approximate functions. Unlike previous methods that rely on soft constraints or iterative correction, HardNet guarantees constraint satisfaction by construction.",
            "paper-title": "Hard-Constrained Neural Networks with Universal Approximation Guarantees",
            "image-path": "flux_paper_image/2410.10807_1729030595.png"
        },

        {
            "startTime": "40:52",
            "arxivId": "2410.09194",
            "arxivLink": "https://arxiv.org/abs/2410.09194",
            "title": "IoT Security: Don't Let Your Smart Devices Become Dumb Bots!",
            "institute": "University of Oxford",
            "text": "This research introduces a dependency-based cyber risk model for IoT systems, which goes beyond traditional risk assessment methods by considering the interconnectedness of devices and the cascading effects of vulnerabilities.",
            "paper-title": "AI security and cyber risk in IoT systems",
            "image-path": "flux_paper_image/2410.09194_1729028732.png"
        },

        {
            "startTime": "41:23",
            "arxivId": "2410.10398",
            "arxivLink": "https://arxiv.org/abs/2410.10398",
            "title": "AI's Got Feelings: Can Robots Be Fairer Than Humans?",
            "institute": "Tsinghua University, Fudan University, Stevens Institute of Technology...",
            "text": "This research introduces FairMindSim, a simulation that compares human and LLM agent behavior in unfair scenarios. It uses a multi-round economic game to assess how these agents respond to ethical dilemmas, focusing on the concept of altruistic punishment. Unlike previous work, this study incorporates emotional responses and beliefs into the analysis, exploring how these factors influence decision-making.",
            "paper-title": "FairMindSim: Alignment of Behavior, Emotion, and Belief in Humans and LLM Agents Amid Ethical Dilemmas",
            "image-path": "flux_paper_image/2410.10398_1729028963.png"
        },

        {
            "startTime": "41:43",
            "arxivId": "2410.09692",
            "arxivLink": "https://arxiv.org/abs/2410.09692",
            "title": "LoRA's Got Problems: ALLoRA to the Rescue!",
            "institute": "Brown University, Google",
            "text": "This paper identifies three limitations of LoRA, a popular technique for fine-tuning large language models, and proposes a new method called ALLoRA that addresses these limitations by introducing an adaptive learning rate. This approach differs from previous work by focusing on the specific challenges of fine-tuning, which involves limited data and training steps.",
            "paper-title": "ALLoRA: Adaptive Learning Rate Mitigates LoRA Fatal Flaws",
            "image-path": "flux_paper_image/2410.09692_1729025959.png"
        },

        {
            "startTime": "42:09",
            "arxivId": "2410.10523",
            "arxivLink": "https://arxiv.org/abs/2410.10523",
            "title": "Machine Learning: The New Wizard of Inverse Problems and Data Assimilation!",
            "institute": "Caltech, University of Reading, University of Chicago",
            "text": "This research explores the use of machine learning techniques to solve inverse problems and data assimilation problems, which are traditionally tackled with more classical methods. The paper focuses on using machine learning to learn the forward model, the prior distribution, and the regularizers used in these problems.",
            "paper-title": "Inverse Problems and Data Assimilation: A Machine Learning Approach",
            "image-path": "flux_paper_image/2410.10523_1729026018.png"
        },

        {
            "startTime": "42:28",
            "arxivId": "2410.10810",
            "arxivLink": "https://arxiv.org/abs/2410.10810",
            "title": "Decoding Drama: Why Local Normalization Makes Text Generation More Human-Like",
            "institute": "University of Luxembourg, ETH Zurich",
            "text": "This research investigates the impact of local normalization on text generation, comparing it to a globally normalized approach. The study introduces a globally normalized version of popular decoding methods like top-k and top-\u03c0, and uses an independent Metropolis-Hastings algorithm to approximate sampling from these globally normalized distributions.",
            "paper-title": "Local and Global Decoding in Text Generation",
            "image-path": "flux_paper_image/2410.10810_1729026826.png"
        },

        {
            "startTime": "42:58",
            "arxivId": "2410.09125",
            "arxivLink": "https://arxiv.org/abs/2410.09125",
            "title": "Fake Labels, Real Privacy: A New Defense Against Label Leakage in Split Learning",
            "institute": "Tencent Inc., Tsinghua University, Peking University",
            "text": "This research proposes a novel method called SECDT to mitigate label leakage in split learning. SECDT utilizes a dimension transformation module to increase the label space, making it harder for adversaries to infer private labels. It also incorporates gradient normalization and noise-based randomization to further enhance privacy protection.",
            "paper-title": "Training on Fake Labels: Mitigating Label Leakage in Split Learning via Secure Dimension Transformation",
            "image-path": "flux_paper_image/2410.09125_1729030674.png"
        },

        {
            "startTime": "43:31",
            "arxivId": "2410.10348",
            "arxivLink": "https://arxiv.org/abs/2410.10348",
            "title": "LLMs Need a Tutor: Auto-Labeling Makes Them Smarter!",
            "institute": "IBM",
            "text": "This paper proposes a method called Automatic Data Labeling and Refinement (ADLR) to automatically generate and filter demonstrations for In-Context Learning (ICL) in LLMs. Unlike previous work that relies on manually crafted examples, ADLR leverages a large training dataset to create a pool of examples with intermediate steps, which are then refined based on their difficulty and usefulness.",
            "paper-title": "Augmenting In-Context-Learning in LLMs via Automatic Data Labeling and Refinement",
            "image-path": "flux_paper_image/2410.10348_1729026025.png"
        },

        {
            "startTime": "43:53",
            "arxivId": "2410.10665",
            "arxivLink": "https://arxiv.org/abs/2410.10665",
            "title": "AI's Language Gap: \"Poor Languages\" Pay More, Get Less",
            "institute": "The World Bank",
            "text": "This research quantifies the economic disparities in accessing large language models (LLMs) for speakers of different languages. It goes beyond previous work by analyzing the impact of tokenization, a process that breaks down text into units for processing, on the cost and performance of LLMs.",
            "paper-title": "Double Jeopardy and Climate Impact in the Use of Large Language Models: Socio-economic Disparities and Reduced Utility for Non-English Speakers",
            "image-path": "flux_paper_image/2410.10665_1729030436.png"
        },

        {
            "startTime": "44:10",
            "arxivId": "2410.10045",
            "arxivLink": "https://arxiv.org/abs/2410.10045",
            "title": "Robot Chef Learns to Cook Without Recipes: A New AI Model for Bi-Level Planning",
            "institute": "University of Cambridge",
            "text": "This research proposes a novel neural network model that can learn high-level skill representations from unlabeled demonstration data. Unlike previous work that relies on clustering actions and effects, this model uses vector quantization to learn discrete skill representations, preserving low-level information for planning.",
            "paper-title": "VQ-CNMP: Neuro-Symbolic Skill Learning for Bi-Level Planning",
            "image-path": "flux_paper_image/2410.10045_1729028155.png"
        },

        {
            "startTime": "44:40",
            "arxivId": "2410.10548",
            "arxivLink": "https://arxiv.org/abs/2410.10548",
            "title": "Outlier Exposure: No Real OOD Data Needed!",
            "institute": "Tsinghua University",
            "text": "This research proposes a new framework called RICASSO that addresses long-tailed recognition and out-of-distribution (OOD) detection simultaneously. Unlike previous methods that rely on real OOD data, RICASSO utilizes mixed data, a technique commonly used in long-tailed recognition, to generate pseudo-OOD data.",
            "paper-title": "RICASSO: Reinforced Imbalance Learning with Class-Aware Self-Supervised Outliers Exposure",
            "image-path": "flux_paper_image/2410.10548_1729029773.png"
        },

        {
            "startTime": "45:07",
            "arxivId": "2410.09776",
            "arxivLink": "https://arxiv.org/abs/2410.09776",
            "title": "Video Q&A: Asking the Right Questions, One Clip at a Time",
            "institute": "Indian Institute of Technology Patna, Microsoft, Indian Institute of Technology Jodhpur",
            "text": "This research focuses on generating entity-centric information-seeking questions from videos, a departure from previous work that primarily focused on generating questions about common objects and attributes.",
            "paper-title": "ECIS-VQG: Generation of Entity-centric Information-seeking Questions from Videos",
            "image-path": "flux_paper_image/2410.09776_1729027616.png"
        },

        {
            "startTime": "45:36",
            "arxivId": "2410.09531",
            "arxivLink": "https://arxiv.org/abs/2410.09531",
            "title": "Private Inference: A Speed Demon with a Secret Sharing Plan",
            "institute": "Peking University",
            "text": "This research proposes PrivQuant, a framework that jointly optimizes the 2PC protocols for quantized DNN inference and the network quantization strategy. Unlike previous work, PrivQuant considers the DNN architecture during protocol optimization, leading to more efficient communication.",
            "paper-title": "PrivQuant: Communication-Efficient Private Inference with Quantized Network/Protocol Co-Optimization",
            "image-path": "flux_paper_image/2410.09531_1729029232.png"
        },

        {
            "startTime": "45:52",
            "arxivId": "2410.09638",
            "arxivLink": "https://arxiv.org/abs/2410.09638",
            "title": "Goodhart's Law: When Optimizing for the Wrong Thing Backfires Big Time!",
            "institute": "\u00b4Ecole Polytechnique, Calicarpa, Tournesol Association",
            "text": "This paper formally proves that Goodhart's law, the phenomenon where optimizing a proxy measure can harm the true goal, depends on the tail distribution of the discrepancy between the measure and the goal. This is a novel approach compared to previous work that focused on identifying root causes of Goodhart's law.",
            "paper-title": "On Goodhart's law, with an application to value alignment",
            "image-path": "flux_paper_image/2410.09638_1729027046.png"
        },

        {
            "startTime": "46:17",
            "arxivId": "2410.10293",
            "arxivLink": "https://arxiv.org/abs/2410.10293",
            "title": "RAG's New Trick: Funneling Knowledge for Faster, Smarter Answers!",
            "institute": "Harbin Institute of Technology, Peking University",
            "text": "This paper introduces a new retrieval paradigm for RAG called FUNNELRAG. Unlike previous flat retrieval methods, FUNNELRAG uses a progressive approach, starting with coarse-grained units and gradually refining them to fine-grained units. This allows for a more efficient and effective retrieval process.",
            "paper-title": "FunnelRAG: A Coarse-to-Fine Progressive Retrieval Paradigm for RAG",
            "image-path": "flux_paper_image/2410.10293_1729029921.png"
        },

        {
            "startTime": "46:43",
            "arxivId": "2410.09102",
            "arxivLink": "https://arxiv.org/abs/2410.09102",
            "title": "LLMs Get a Hierarchy Makeover: Embedding Instructions for Safety!",
            "institute": "Princeton University",
            "text": "This research introduces Instructional Segment Embedding (ISE), a technique that embeds instruction priority information directly into the model's architecture. Unlike previous approaches that rely on delimiters or instruction-based training, ISE addresses the issue at the architectural level, enabling LLMs to explicitly differentiate and prioritize various instruction types.",
            "paper-title": "Instructional Segment Embedding: Improving LLM Safety with Instruction Hierarchy",
            "image-path": "flux_paper_image/2410.09102_1729027610.png"
        },

        {
            "startTime": "47:04",
            "arxivId": "2410.09412",
            "arxivLink": "https://arxiv.org/abs/2410.09412",
            "title": "LLMs: Can They Handle Feedback Like a Boss? New Benchmark Tests Their Responsiveness!",
            "institute": "Peking University",
            "text": "This research introduces FB-Bench, a benchmark specifically designed to evaluate LLMs' ability to respond to human feedback in multi-turn dialogues. Unlike previous benchmarks, FB-Bench focuses on real-world scenarios, incorporating diverse task types, feedback types, and deficiencies in model responses.",
            "paper-title": "FB-Bench: A Fine-Grained Multi-Task Benchmark for Evaluating LLMs' Responsiveness to Human Feedback",
            "image-path": "flux_paper_image/2410.09412_1729030537.png"
        },

        {
            "startTime": "47:28",
            "arxivId": "2410.09568",
            "arxivLink": "https://arxiv.org/abs/2410.09568",
            "title": "Lazy Hessians: A New Trick for Speeding Up Min-Max Optimization",
            "institute": "Tsinghua University",
            "text": "This paper proposes a new method for solving min-max optimization problems that reuses Hessian information from previous iterations, reducing the computational complexity compared to existing methods.",
            "paper-title": "Second-Order Min-Max Optimization with Lazy Hessians",
            "image-path": "flux_paper_image/2410.09568_1729030369.png"
        },

        {
            "startTime": "48:00",
            "arxivId": "2410.09640",
            "arxivLink": "https://arxiv.org/abs/2410.09640",
            "title": "Nesterov's Gradient Gets a Speed Boost: Unbalanced Initialization Makes Matrix Factorization Fly!",
            "institute": "Georgia Institute of Technology, UC Berkeley, University of Texas at Austin",
            "text": "This research explores the convergence rate of first-order methods for rectangular matrix factorization, a common problem in machine learning. Unlike previous work that focused on balanced initialization, this paper uses an unbalanced initialization scheme where one matrix is initialized with large values and the other with zeros. This approach leads to faster convergence rates for both gradient descent (GD) and Nesterov's accelerated gradient (NAG).",
            "paper-title": "Provable Acceleration of Nesterov's Accelerated Gradient for Rectangular Matrix Factorization and Linear Neural Networks",
            "image-path": "flux_paper_image/2410.09640_1729029379.png"
        },

        {
            "startTime": "48:27",
            "arxivId": "2410.09283",
            "arxivLink": "https://arxiv.org/abs/2410.09283",
            "title": "Medieval Latin Charters: A Word's Journey Through Time",
            "institute": "University of Toronto",
            "text": "This research is the first to systematically compare static and contextual word embeddings for analyzing semantic change in Medieval Latin charters, specifically focusing on the impact of the Norman Conquest.",
            "paper-title": "Comparative Analysis of Static and Contextual Embeddings for Analyzing Semantic Changes in Medieval Latin Charters",
            "image-path": "flux_paper_image/2410.09283_1729029996.png"
        },

        {
            "startTime": "48:48",
            "arxivId": "2410.10624",
            "arxivLink": "https://arxiv.org/abs/2410.10624",
            "title": "LLMs Get a Grip on Sensor Data: A New Framework for Activity Recognition",
            "institute": "University of New South Wales, University of Tokyo",
            "text": "This research introduces SensorLLM, a framework that aligns sensor data with automatically generated text, enabling LLMs to understand and analyze time-series data without requiring modifications to the LLM itself. This approach differs from previous work by using a generative model to automatically create descriptive text from sensor data, eliminating the need for manual annotations.",
            "paper-title": "SensorLLM: Aligning Large Language Models with Motion Sensors for Human Activity Recognition",
            "image-path": "flux_paper_image/2410.10624_1729028178.png"
        },

        {
            "startTime": "49:10",
            "arxivId": "2410.10329",
            "arxivLink": "https://arxiv.org/abs/2410.10329",
            "title": "GraphCLIP: Giving Graphs a Language Model Makeover!",
            "institute": "Zhejiang University, Rutgers University, Ant Group...",
            "text": "This paper proposes GraphCLIP, a framework that uses a self-supervised contrastive graph-summary pretraining method to enhance the transferability of graph foundation models. Unlike previous methods that heavily rely on labeled data, GraphCLIP leverages the summarization capabilities of large language models to generate graph-summary pairs, enabling it to learn transferable knowledge from unlabeled data.",
            "paper-title": "GraphCLIP: Enhancing Transferability in Graph Foundation Models for Text-Attributed Graphs",
            "image-path": "flux_paper_image/2410.10329_1729028482.png"
        },

        {
            "startTime": "49:35",
            "arxivId": "2410.10144",
            "arxivLink": "https://arxiv.org/abs/2410.10144",
            "title": "Bridging the Gap: How Language Models Are Helping Us Understand Our Genes",
            "institute": "Harvard Medical School, Tsinghua University, VA Boston Healthcare System...",
            "text": "This research introduces GENEREL, a framework that uses language models to represent both biomedical concepts and genetic variants in a unified embedding space. Unlike previous methods that rely on code mappings, GENEREL learns directly from text descriptions, enabling more accurate and flexible integration of knowledge from diverse sources.",
            "paper-title": "Unified Representation of Genomic and Biomedical Concepts through Multi-Task, Multi-Source Contrastive Learning",
            "image-path": "flux_paper_image/2410.10144_1729027750.png"
        },

        {
            "startTime": "50:04",
            "arxivId": "2410.09299",
            "arxivLink": "https://arxiv.org/abs/2410.09299",
            "title": "Deep Learning Gets a Grip on Uncertainty in Brain Scans",
            "institute": "Harvard University",
            "text": "This paper proposes a method to propagate uncertainty estimates from the voxel level to the level of global transformation models in deep learning-based image registration. This is different from previous work that primarily focused on voxel-level uncertainty estimation.",
            "paper-title": "Hierarchical uncertainty estimation for learning-based registration in neuroimaging",
            "image-path": "flux_paper_image/2410.09299_1729027012.png"
        },

        {
            "startTime": "50:24",
            "arxivId": "2410.09655",
            "arxivLink": "https://arxiv.org/abs/2410.09655",
            "title": "MLP Makeover: Giving Neural Networks a Dose of Inductive Bias",
            "institute": "ETH Zurich",
            "text": "This research introduces a novel method called \"Interpolated MLP\" (I-MLP) that allows for fractional control of inductive bias in Multi-Layer Perceptrons (MLPs). Unlike previous work that focused on increasing compute power to improve MLP performance, this study investigates the impact of incrementally adding inductive bias at low-compute levels.",
            "paper-title": "Interpolated-MLPs: Controllable Inductive Bias",
            "image-path": "flux_paper_image/2410.09655_1729030153.png"
        },

        {
            "startTime": "50:46",
            "arxivId": "2410.10653",
            "arxivLink": "https://arxiv.org/abs/2410.10653",
            "title": "Occluded Objects? No Problem! New Model Predicts Trajectories Even When Things Are Hidden",
            "institute": "VERSES Research Lab, Volvo Cars",
            "text": "This research proposes a new framework for predicting object trajectories, especially when objects are partially or fully hidden from view. Unlike previous methods that rely on high-capacity models like Transformers, this approach uses a structured probabilistic model called a switching dynamical system.",
            "paper-title": "Navigation under uncertainty: Trajectory prediction and occlusion reasoning with switching dynamical systems",
            "image-path": "flux_paper_image/2410.10653_1729027414.png"
        },

        {
            "startTime": "51:09",
            "arxivId": "2410.10450",
            "arxivLink": "https://arxiv.org/abs/2410.10450",
            "title": "LLMs Get a Knowledge Boost: Say Goodbye to Retrieval Modules!",
            "institute": "University of Massachusetts, Microsoft",
            "text": "This paper proposes a new method for augmenting LLMs with external knowledge called KBLAM. Unlike Retrieval-Augmented Generation (RAG), KBLAM doesn't rely on separate retrieval modules. Instead, it integrates knowledge directly into the LLM's attention mechanism, making it more efficient and scalable.",
            "paper-title": "KBLaM: Knowledge Base augmented Language Model",
            "image-path": "flux_paper_image/2410.10450_1729029737.png"
        },

        {
            "startTime": "51:33",
            "arxivId": "2410.09196",
            "arxivLink": "https://arxiv.org/abs/2410.09196",
            "title": "Signature-Based Distribution Regression: A Speedy Solution for Time Series Data",
            "institute": "King\u2019s College London, University of Oxford",
            "text": "This research introduces a new method for distribution regression (DR) on stochastic processes, which are essentially time series data. The key innovation is the use of a novel distance approximator that significantly reduces the computational cost of DR, allowing for the analysis of larger datasets and longer time series. This approach differs from previous work that relied on kernel-based methods, which were often limited by computational constraints.",
            "paper-title": "Scalable Signature-Based Distribution Regression via Reference Sets",
            "image-path": "flux_paper_image/2410.09196_1729028333.png"
        },

        {
            "startTime": "51:56",
            "arxivId": "2410.09443",
            "arxivLink": "https://arxiv.org/abs/2410.09443",
            "title": "Mapping Thermal Comfort: SLAM and Segmentation Make MRT Measurement a Breeze!",
            "institute": "CMU",
            "text": "This research proposes a novel MRT measurement framework that utilizes visual SLAM and semantic segmentation techniques, offering a faster and more efficient approach compared to traditional methods.",
            "paper-title": "An Expeditious Spatial Mean Radiant Temperature Mapping Framework using Visual SLAM and Semantic Segmentation",
            "image-path": "flux_paper_image/2410.09443_1729030021.png"
        },

        {
            "startTime": "52:20",
            "arxivId": "2410.10084",
            "arxivLink": "https://arxiv.org/abs/2410.10084",
            "title": "PointNet Gets a Brain Upgrade: Kolmogorov-Arnold Networks Take on 3D Data",
            "institute": "Stanford University",
            "text": "This paper integrates Kolmogorov-Arnold Networks (KANs) into PointNet, a popular neural network for 3D point cloud data, for the first time. Unlike traditional MLPs, KANs train the activation functions themselves, offering a new approach to point cloud processing.",
            "paper-title": "PointNet with KAN versus PointNet with MLP for 3D Classification and Segmentation of Point Sets",
            "image-path": "flux_paper_image/2410.10084_1729027064.png"
        },

        {
            "startTime": "52:41",
            "arxivId": "2410.10623",
            "arxivLink": "https://arxiv.org/abs/2410.10623",
            "title": "Phase Retrieval: Outlier-Proofing the Signal Recovery Game",
            "institute": "University of Oxford",
            "text": "This paper introduces a robust gradient descent method for phase retrieval, specifically designed to handle heavy-tailed noise and adversarial contamination in both the input and output data. This approach differs from previous work by leveraging robust gradient estimators, which are more resilient to outliers, and by addressing the challenge of unknown noise mean through a preprocessing step.",
            "paper-title": "Robust Gradient Descent for Phase Retrieval",
            "image-path": "flux_paper_image/2410.10623_1729026949.png"
        },

        {
            "startTime": "53:05",
            "arxivId": "2410.09775",
            "arxivLink": "https://arxiv.org/abs/2410.09775",
            "title": "EasyJudge: LLM Evaluation Made Easy (and Cheap!)",
            "institute": "Minzu University of China, National Language Resource Monitoring & Research Center",
            "text": "This research introduces EasyJudge, an open-source LLM evaluation tool that offers a user-friendly interface and efficient inference capabilities, addressing the limitations of existing closed-source and open-source evaluation models.",
            "paper-title": "EasyJudge: an Easy-to-use Tool for Comprehensive Response Evaluation of LLMs",
            "image-path": "flux_paper_image/2410.09775_1729027949.png"
        },

        {
            "startTime": "53:21",
            "arxivId": "2410.09163",
            "arxivLink": "https://arxiv.org/abs/2410.09163",
            "title": "Robots Learn to Walk in 3 Minutes with a Little Help from Physics!",
            "institute": "University of Texas at Austin",
            "text": "This research introduces a novel framework called Semi-Structured Reinforcement Learning (SSRL) that combines structured first principles modeling with black-box auto-regressive models. This approach allows for accurate long-horizon predictions with significantly less data than previous methods.",
            "paper-title": "Learning to Walk from Three Minutes of Real-World Data with Semi-structured Dynamics Models",
            "image-path": "flux_paper_image/2410.09163_1729030210.png"
        },

        {
            "startTime": "53:42",
            "arxivId": "2410.10791",
            "arxivLink": "https://arxiv.org/abs/2410.10791",
            "title": "Driving in the Fog? No Problem! This AI Can See Through Anything",
            "institute": "ETH Zurich",
            "text": "This research introduces a novel condition-aware multimodal fusion approach for robust semantic perception in autonomous driving. Unlike previous methods that treat sensors uniformly across all conditions, this approach dynamically adapts sensor fusion based on the actual environmental conditions, such as weather and lighting.",
            "paper-title": "Condition-Aware Multimodal Fusion for Robust Semantic Perception of Driving Scenes",
            "image-path": "flux_paper_image/2410.10791_1729029508.png"
        },

        {
            "startTime": "54:13",
            "arxivId": "2410.09988",
            "arxivLink": "https://arxiv.org/abs/2410.09988",
            "title": "LLMs Flunk Advanced Math: New Dataset Tests AI's Limits",
            "institute": "Harvard University",
            "text": "This research introduces HARDMATH, a new dataset designed to evaluate Large Language Models (LLMs) on challenging applied mathematics problems that require analytical approximation techniques. Unlike existing datasets that focus on simpler problems, HARDMATH targets problems that are more representative of real-world scientific and engineering applications.",
            "paper-title": "HARDMath: A Benchmark Dataset for Challenging Problems in Applied Mathematics",
            "image-path": "flux_paper_image/2410.09988_1729026364.png"
        },

        {
            "startTime": "54:37",
            "arxivId": "2410.09528",
            "arxivLink": "https://arxiv.org/abs/2410.09528",
            "title": "Step Up Your Reasoning Game: LLMs Learn Logic with New Training Data",
            "institute": "Tsinghua University",
            "text": "This research introduces a novel data generation method called MuseD for multi-step deductive reasoning tasks. Unlike previous work that focuses on supervised fine-tuning or evaluation, MuseD generates data specifically for Reinforcement Learning from Human Feedback (RLHF) training.",
            "paper-title": "Boosting Deductive Reasoning with Step Signals In RLHF",
            "image-path": "flux_paper_image/2410.09528_1729028652.png"
        },

        {
            "startTime": "55:01",
            "arxivId": "2410.09660",
            "arxivLink": "https://arxiv.org/abs/2410.09660",
            "title": "Constrained Optimization on the SPD Manifold: A Regularization Revolution!",
            "institute": "Harvard University",
            "text": "This research introduces a new class of structured regularizers based on symmetric gauge functions for constrained optimization on the SPD manifold. This approach differs from previous work by explicitly designing regularizers to preserve desirable structure in the objective, such as geodesic convexity and difference of convex structure.",
            "paper-title": "Structured Regularization for Constrained Optimization on the SPD Manifold",
            "image-path": "flux_paper_image/2410.09660_1729029204.png"
        },

        {
            "startTime": "55:31",
            "arxivId": "2410.10215",
            "arxivLink": "https://arxiv.org/abs/2410.10215",
            "title": "LLMs as Judges: A Skill-Based Approach to Aggregating Their Opinions",
            "institute": "University of Cambridge, Stanford University",
            "text": "This research proposes a new method called SkillAggregation for combining predictions from multiple LLMs without relying on reference labels. Unlike previous work that assigns equal weight to all LLMs or focuses on specific tasks, SkillAggregation dynamically weights LLMs based on contextual information, learning their individual skills and reliability.",
            "paper-title": "SkillAggregation: Reference-free LLM-Dependent Aggregation",
            "image-path": "flux_paper_image/2410.10215_1729026509.png"
        },

        {
            "startTime": "55:56",
            "arxivId": "2410.10546",
            "arxivLink": "https://arxiv.org/abs/2410.10546",
            "title": "Graph Classification Gets a Hodge-Boost: New GP Method Uses Edge Features for Better Predictions",
            "institute": "University College London",
            "text": "This research introduces a Gaussian process (GP)-based classification algorithm that can utilize both vertex and edge features to classify graphs. It differs from previous work by incorporating the Hodge decomposition, which splits the spectral features into three components, allowing for greater model flexibility.",
            "paper-title": "Graph Classification Gaussian Processes via Hodgelet Spectral Features",
            "image-path": "flux_paper_image/2410.10546_1729028830.png"
        },

        {
            "startTime": "56:21",
            "arxivId": "2410.10779",
            "arxivLink": "https://arxiv.org/abs/2410.10779",
            "title": "ReAct's Got a New Trick: FocusedReAct Stops the Loop-de-Loop!",
            "institute": "CMU, University of Illinois, William & Mary",
            "text": "This paper introduces FocusedReAct, an improvement on the ReAct framework for question answering. It addresses two issues: the model losing focus on the original question and getting stuck in repetitive action loops. FocusedReAct tackles these by incorporating reiteration and early stopping mechanisms.",
            "paper-title": "Focused ReAct: Improving ReAct through Reiterate and Early Stop",
            "image-path": "flux_paper_image/2410.10779_1729029540.png"
        },

        {
            "startTime": "56:45",
            "arxivId": "2410.10320",
            "arxivLink": "https://arxiv.org/abs/2410.10320",
            "title": "DiRW: Walking the Digraph, One Directed Path at a Time!",
            "institute": "Tsinghua University",
            "text": "This research introduces DiRW, a novel path-aware digraph learning approach that customizes walk probabilities, length, and number for each node. This differs from previous work by incorporating a direction-aware path sampler and a node-wise learnable path aggregator, which are optimized for digraphs.",
            "paper-title": "DiRW: Path-Aware Digraph Learning for Heterophily",
            "image-path": "flux_paper_image/2410.10320_1729027232.png"
        },

        {
            "startTime": "57:08",
            "arxivId": "2410.09659",
            "arxivLink": "https://arxiv.org/abs/2410.09659",
            "title": "Machine Learning Gets a 3D Makeover: Taming Transition Metal Complexes with Many-Body Expansion",
            "institute": "Massachusetts Institute of Technology",
            "text": "This research introduces a modification to the revised autocorrelations (RACs) descriptor set, a common featurization method for octahedral transition metal complexes (TMCs). The new approach incorporates the many-body expansion (MBE) to capture 3D information about the arrangement of ligands around the metal center, which was previously missing in simpler graph-based models.",
            "paper-title": "Many-body Expansion Based Machine Learning Models for Octahedral Transition Metal Complexes",
            "image-path": "flux_paper_image/2410.09659_1729027479.png"
        },

        {
            "startTime": "57:29",
            "arxivId": "2410.10153",
            "arxivLink": "https://arxiv.org/abs/2410.10153",
            "title": "Hate Speech Detectives: When Humans and Machines Disagree",
            "institute": "Princeton University",
            "text": "This study uses embedding regression to diagnose hate speech classification, focusing on the discrepancies between human and machine judgments. It goes beyond simply classifying hate speech and delves into the linguistic patterns that cause these disagreements.",
            "paper-title": "Diagnosing Hate Speech Classification: Where Do Humans and Machines Disagree, and Why?",
            "image-path": "flux_paper_image/2410.10153_1729030444.png"
        },

        {
            "startTime": "57:53",
            "arxivId": "2410.09385",
            "arxivLink": "https://arxiv.org/abs/2410.09385",
            "title": "Mamba4Cast: Forecasting the Future, One State at a Time!",
            "institute": "University of Freiburg",
            "text": "This paper introduces Mamba4Cast, a zero-shot time series forecasting model based on the Mamba architecture. Unlike transformer-based models, Mamba4Cast leverages state space models for efficient scaling over longer context lengths.",
            "paper-title": "Mamba4Cast: Efficient Zero-Shot Time Series Forecasting with State Space Models",
            "image-path": "flux_paper_image/2410.09385_1729029566.png"
        },

        {
            "startTime": "58:11",
            "arxivId": "2410.09066",
            "arxivLink": "https://arxiv.org/abs/2410.09066",
            "title": "AI Crime Wave: Financial Firms Need to Surf or Sink!",
            "institute": "Princeton University, Capital One",
            "text": "This research focuses on the co-evolutionary nature of AI in financial crimes, highlighting how criminal organizations are rapidly adopting AI to create new and sophisticated fraud schemes, while financial institutions struggle to keep up.",
            "paper-title": "AI versus AI in Financial Crimes and Detection: GenAI Crime Waves to Co-Evolutionary AI",
            "image-path": "flux_paper_image/2410.09066_1729026816.png"
        },

        {
            "startTime": "58:33",
            "arxivId": "2410.09933",
            "arxivLink": "https://arxiv.org/abs/2410.09933",
            "title": "FedECADO: Federated Learning's New Dynamic Duo for Non-IID Data",
            "institute": "Carnegie Mellon University",
            "text": "This research introduces FedECADO, a new algorithm that uses a dynamical system model to address the challenges of non-IID data distributions and heterogeneous computing in federated learning. Unlike previous work, FedECADO incorporates a multi-rate integration method to synchronize client updates and an aggregate sensitivity model to account for data heterogeneity.",
            "paper-title": "FedECADO: A Dynamical System Model of Federated Learning",
            "image-path": "flux_paper_image/2410.09933_1729029779.png"
        },

        {
            "startTime": "59:00",
            "arxivId": "2410.10158",
            "arxivLink": "https://arxiv.org/abs/2410.10158",
            "title": "Safe RL Gets a Regret-Busting Upgrade!",
            "institute": "Korea Advanced Institute of Science and Technology, Stanford University",
            "text": "This paper proposes a new algorithm, DOPE+, for safe reinforcement learning that improves upon the existing DOPE algorithm by using tighter reward optimism and cost pessimism estimators. This leads to a better regret upper bound, which is closer to the theoretical lower bound.",
            "paper-title": "Improved Regret Bound for Safe Reinforcement Learning via Tighter Cost Pessimism and Reward Optimism",
            "image-path": "flux_paper_image/2410.10158_1729030421.png"
        },

        {
            "startTime": "59:23",
            "arxivId": "2410.09449",
            "arxivLink": "https://arxiv.org/abs/2410.09449",
            "title": "Stress Detection: AI Gets a Therapist's Touch!",
            "institute": "Tsinghua University",
            "text": "This research introduces a self-re\ufb01nement mechanism for video-based stress detection models, allowing them to iteratively improve their reasoning and accuracy by reflecting on their own mistakes. This differs from previous work by focusing on enhancing the interpretability and faithfulness of the model's decisions.",
            "paper-title": "Interpretable Video based Stress Detection with Self-Refine Chain-of-thought Reasoning",
            "image-path": "flux_paper_image/2410.09449_1729028405.png"
        },

        {
            "startTime": "59:41",
            "arxivId": "2410.09818",
            "arxivLink": "https://arxiv.org/abs/2410.09818",
            "title": "Cancer Diagnosis Gets a Topological Twist!",
            "institute": "University of Texas at Dallas, Harvard University",
            "text": "This research integrates topological data analysis (TDA) with deep learning for histopathological image analysis. Unlike previous work that primarily relies on local image features, TDA extracts global topological patterns, enhancing the accuracy and robustness of cancer detection models.",
            "paper-title": "TopOC: Topological Deep Learning for Ovarian and Breast Cancer Diagnosis",
            "image-path": "flux_paper_image/2410.09818_1729029441.png"
        }
    ],
    "stats": {
        "num_pick": 186,
        "num_total": 739,
    },
    "audio": "https://d2irtorupa9e8g.cloudfront.net/daily_podcast/202410151530_audio.mp3"
}
