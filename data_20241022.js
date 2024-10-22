
daily_data = {
    "date": "2024-10-22",
    "tweets": [
        
        {
            "startTime": "01:07",
            "arxivId": "2410.15728",
            "arxivLink": "https://arxiv.org/abs/2410.15728",
            "title": "Stop the Slot Shuffle: New Trick Makes Object Tracking in Videos Super Smooth",
            "institute": "Delft University of Technology, University of Tokyo",
            "text": "This paper introduces a new method called Conditional Autoregressive Slot Attention (CA-SA) to improve temporal consistency in object-centric video representations. Unlike previous approaches that rely solely on architectural biases or regularization, CA-SA combines an autoregressive prior network with a novel consistency loss function to ensure that the same slots are used to represent the same objects across consecutive frames.",
            "paper-title": "Object-Centric Temporal Consistency via Conditional Autoregressive Inductive Biases",
            "image-path": "flux_paper_image/2410.15728_1729629463.png"
        },

        {
            "startTime": "01:48",
            "arxivId": "2410.14706",
            "arxivLink": "https://arxiv.org/abs/2410.14706",
            "title": "Transformers: Not Just for Language, They're Compilers Now!",
            "institute": "University of Washington",
            "text": "This research formally investigates the use of transformers as compilers, proving that they can efficiently perform tasks like AST construction, symbol resolution, and type analysis. Unlike previous work focusing on universal approximation power, this paper delves into the specific capabilities of transformers for programming language processing.",
            "paper-title": "Transformers are Efficient Compilers, Provably",
            "image-path": "flux_paper_image/2410.14706_1729628498.png"
        },

        {
            "startTime": "02:09",
            "arxivId": "2410.15225",
            "arxivLink": "https://arxiv.org/abs/2410.15225",
            "title": "Instruction Selection: A Random Chance at Success?",
            "institute": "CMU",
            "text": "This research investigates the generalization capabilities of instruction selection strategies across various datasets, selection budgets, and evaluation benchmarks. Unlike previous work, it focuses on comparing the performance of these strategies against random baselines, revealing that they often fail to consistently outperform even the simplest random sampling.",
            "paper-title": "Chasing Random: Instruction Selection Strategies Fail to Generalize",
            "image-path": "flux_paper_image/2410.15225_1729628754.png"
        },

        {
            "startTime": "02:27",
            "arxivId": "2410.15391",
            "arxivLink": "https://arxiv.org/abs/2410.15391",
            "title": "Layout-Your-3D: Giving 3D Scenes a 2D Blueprint!",
            "institute": "Huazhong University of Science and Technology, NVIDIA, UC Merced...",
            "text": "This research introduces Layout-Your-3D, a method that uses 2D layouts as a blueprint to guide the generation of 3D scenes. Unlike previous methods that rely solely on text prompts, Layout-Your-3D leverages the spatial information provided by the 2D layout to create more accurate and realistic 3D scenes.",
            "paper-title": "Layout-your-3D: Controllable and Precise 3D Generation with 2D Blueprint",
            "image-path": "flux_paper_image/2410.15391_1729628665.png"
        },

        {
            "startTime": "02:54",
            "arxivId": "2410.15821",
            "arxivLink": "https://arxiv.org/abs/2410.15821",
            "title": "Fine-Tuning Toxicity: How Open AI Models Can Get a Little Too Chatty",
            "institute": "University of Oxford",
            "text": "This research investigates the impact of fine-tuning on the toxicity of open-source language models. Unlike previous studies that focused on adversarial fine-tuning, this paper examines the effects of fine-tuning on non-adversarial datasets, demonstrating that even benign data can inadvertently increase toxicity.",
            "paper-title": "The effect of fine-tuning on language model toxicity",
            "image-path": "flux_paper_image/2410.15821_1729627920.png"
        },

        {
            "startTime": "03:17",
            "arxivId": "2410.16062",
            "arxivLink": "https://arxiv.org/abs/2410.16062",
            "title": "Surprise! Information Density Isn't Always Uniform: The Secret Life of Discourse Structure",
            "institute": "ETH Zurich",
            "text": "This research goes beyond the Uniform Information Density (UID) hypothesis, which suggests that speakers distribute information evenly across linguistic units. The authors propose the Structured Context Hypothesis, arguing that information contours are also influenced by the hierarchical structure of discourse.",
            "paper-title": "Surprise! Uniform Information Density Isn't the Whole Story: Predicting Surprisal Contours in Long-form Discourse",
            "image-path": "flux_paper_image/2410.16062_1729629757.png"
        },

        {
            "startTime": "03:47",
            "arxivId": "2410.15661",
            "arxivLink": "https://arxiv.org/abs/2410.15661",
            "title": "Training Language Models on a Budget: A Data Ablation Shortcut!",
            "institute": "CMU",
            "text": "This research proposes a method for approximating data ablation studies in language models by training individual models on subsets of the training corpus and reusing them across evaluations of combinations of subsets. This approach differs from previous work by leveraging parameter averaging to efficiently simulate the effects of different data mixtures without requiring full model training for each combination.",
            "paper-title": "Scalable Data Ablation Approximations for Language Models through Modular Training and Merging",
            "image-path": "flux_paper_image/2410.15661_1729627604.png"
        },

        {
            "startTime": "04:14",
            "arxivId": "2410.14881",
            "arxivLink": "https://arxiv.org/abs/2410.14881",
            "title": "AI Safety: When Retrieval Meets Generation, Content Moderation Gets a Boost!",
            "institute": "Meta",
            "text": "This research proposes a new approach to content moderation called Class-RAG, which uses Retrieval-Augmented Generation (RAG) to enhance the capabilities of traditional fine-tuned models. Unlike traditional methods, Class-RAG leverages a dynamically updated retrieval library to provide contextual information for classification, making it more flexible and adaptable to evolving safety risks.",
            "paper-title": "Class-RAG: Content Moderation with Retrieval Augmented Generation",
            "image-path": "flux_paper_image/2410.14881_1729627699.png"
        },

        {
            "startTime": "04:34",
            "arxivId": "2410.15858",
            "arxivLink": "https://arxiv.org/abs/2410.15858",
            "title": "Adapter Placement: It's Not Just About Where You Put Them, It's About Who They Talk To!",
            "institute": "Google",
            "text": "This research explores the impact of adapter placement on transfer learning performance, going beyond the standard parallel and sequential configurations by introducing long-range and recurrent adapters.",
            "paper-title": "Towards Optimal Adapter Placement for Efficient Transfer Learning",
            "image-path": "flux_paper_image/2410.15858_1729627483.png"
        },

        {
            "startTime": "04:55",
            "arxivId": "2410.15939",
            "arxivLink": "https://arxiv.org/abs/2410.15939",
            "title": "LLMs: Causal Graph Whisperers or Just Pretenders?",
            "institute": "CISPA Helmholtz Center for Information Security, Google",
            "text": "This research introduces a benchmark, CausalGraph2LLM, to evaluate the ability of LLMs to understand and reason about causal graphs. It focuses on how different encoding strategies affect LLM performance on various causal queries, going beyond previous work that primarily focused on graph theory-based tasks.",
            "paper-title": "CausalGraph2LLM: Evaluating LLMs for Causal Queries",
            "image-path": "flux_paper_image/2410.15939_1729628772.png"
        },

        {
            "startTime": "05:15",
            "arxivId": "2410.15756",
            "arxivLink": "https://arxiv.org/abs/2410.15756",
            "title": "Rust's Proof Problem Solved? AI Learns to Write Its Own!",
            "institute": "Microsoft, University of Illinois, Columbia University...",
            "text": "This research introduces SAFE, a self-evolving framework for automated proof generation in Rust. Unlike previous approaches that rely heavily on human-written proofs or prompt engineering, SAFE leverages data synthesis and fine-tuning to train models on a large dataset of automatically generated proofs.",
            "paper-title": "Automated Proof Generation for Rust Code via Self-Evolution",
            "image-path": "flux_paper_image/2410.15756_1729628114.png"
        },

        {
            "startTime": "05:39",
            "arxivId": "2410.15536",
            "arxivLink": "https://arxiv.org/abs/2410.15536",
            "title": "Robot Dreams: Turning Real-World Images into Playable Simulations",
            "institute": "Nvidia",
            "text": "This research introduces a system called GRS that generates robotic simulation tasks from real-world images. Unlike previous work that relies on predefined assets or text prompts, GRS uses vision-language models (VLMs) to understand the scene and match objects to simulation-ready assets.",
            "paper-title": "GRS: Generating Robotic Simulation Tasks from Real-World Images",
            "image-path": "flux_paper_image/2410.15536_1729628670.png"
        },

        {
            "startTime": "06:01",
            "arxivId": "2410.14807",
            "arxivLink": "https://arxiv.org/abs/2410.14807",
            "title": "AI Alignment: Don't Just Explore, Exploit Smartly!",
            "institute": "Stanford University",
            "text": "This research introduces a new class of bandit alignment problems, which extend classic multi-armed bandit problems by incorporating human preferences and costs associated with querying them. This differs from previous work by explicitly modeling the agent's uncertainty about both the environment and human preferences.",
            "paper-title": "Aligning AI Agents via Information-Directed Sampling",
            "image-path": "flux_paper_image/2410.14807_1729628973.png"
        },

        {
            "startTime": "06:18",
            "arxivId": "2410.15633",
            "arxivLink": "https://arxiv.org/abs/2410.15633",
            "title": "Training LLMs on Long Texts: Picking the Juiciest Bits for Better Understanding",
            "institute": "Tsinghua University, Peking University, DeepLang AI",
            "text": "This research focuses on selecting influential samples from a large dataset of long instruction-following data for training LLMs. Unlike previous work that focused on short samples or indiscriminately increasing data volume, this study proposes a novel framework called GATEAU to identify samples enriched with long-range dependency relations.",
            "paper-title": "Selecting Influential Samples for Long Context Alignment via Homologous Models' Guidance and Contextual Awareness Measurement",
            "image-path": "flux_paper_image/2410.15633_1729627503.png"
        },

        {
            "startTime": "06:47",
            "arxivId": "2410.15466",
            "arxivLink": "https://arxiv.org/abs/2410.15466",
            "title": "LLMs: Smart or Just Lucky Guessers?",
            "institute": "Google",
            "text": "This research introduces a new baseline for evaluating the effectiveness of repeated sampling in large language models (LLMs). Instead of simply measuring how many problems an LLM can solve with multiple attempts, the authors compare the results to a baseline that enumerates answers based on their frequency in the training data.",
            "paper-title": "Keep Guessing? When Considering Inference Scaling, Mind the Baselines",
            "image-path": "flux_paper_image/2410.15466_1729629406.png"
        },

        {
            "startTime": "07:05",
            "arxivId": "2410.16077",
            "arxivLink": "https://arxiv.org/abs/2410.16077",
            "title": "MoE Models Get a Multiplication Makeover: CartesianMoE Boosts Knowledge Sharing",
            "institute": "Chinese Academy of Sciences, Tsinghua University",
            "text": "This paper proposes CartesianMoE, a new approach to knowledge sharing in Mixture-of-Experts (MoE) models. Unlike previous methods that combine expert outputs additively, CartesianMoE uses a \"multiplication\" approach, deriving experts from the Cartesian product of two sets of sub-experts.",
            "paper-title": "CartesianMoE: Boosting Knowledge Sharing among Experts via Cartesian Product Routing in Mixture-of-Experts",
            "image-path": "flux_paper_image/2410.16077_1729628512.png"
        },

        {
            "startTime": "07:32",
            "arxivId": "2410.14872",
            "arxivLink": "https://arxiv.org/abs/2410.14872",
            "title": "Reward Models: The Ultimate RLHF Test? Not So Fast!",
            "institute": "UC Berkeley",
            "text": "This research introduces a new benchmark for evaluating reward models used in RLHF (Reinforcement Learning from Human Feedback). Unlike previous benchmarks, this one directly links reward model performance to real-world human preferences on LLMs trained using those models.",
            "paper-title": "How to Evaluate Reward Models for RLHF",
            "image-path": "flux_paper_image/2410.14872_1729629607.png"
        },

        {
            "startTime": "07:56",
            "arxivId": "2410.15575",
            "arxivLink": "https://arxiv.org/abs/2410.15575",
            "title": "Gboard's New Brain: Neural Search Space Makes Typing Smarter!",
            "institute": "Google",
            "text": "This research replaces the traditional N-gram language model in Gboard's search space with a Neural Network Language Model (NN-LM). This allows for longer context awareness, improving the accuracy of word suggestions.",
            "paper-title": "Neural Search Space in Gboard Decoder",
            "image-path": "flux_paper_image/2410.15575_1729629621.png"
        },

        {
            "startTime": "08:17",
            "arxivId": "2410.15774",
            "arxivLink": "https://arxiv.org/abs/2410.15774",
            "title": "Motion Planning for Self-Driving Cars: A Mixture of Experts Knows Best!",
            "institute": "Tsinghua University",
            "text": "This research introduces a new motion planner called StateTransformer-2 (STR2) that uses a Mixture-of-Experts (MoE) architecture. Unlike previous methods, STR2 doesn't rely on additional training paradigms like reinforcement learning or inverse reinforcement learning. Instead, it uses a straightforward one-stage self-supervised learning approach.",
            "paper-title": "Generalizing Motion Planners with Mixture of Experts for Autonomous Driving",
            "image-path": "flux_paper_image/2410.15774_1729627677.png"
        },

        {
            "startTime": "08:48",
            "arxivId": "2410.15959",
            "arxivLink": "https://arxiv.org/abs/2410.15959",
            "title": "Robot Policy Gets a Diffusion Makeover: Denoising Actions with Transformers!",
            "institute": "Shanghai AI Lab, Zhejiang University, The Chinese University of Hong Kong...",
            "text": "This research introduces a new approach to robot policy learning using a diffusion transformer architecture. Unlike previous methods that rely on small action heads or discretized actions, this approach directly denoises continuous action chunks using a large transformer model.",
            "paper-title": "Diffusion Transformer Policy",
            "image-path": "flux_paper_image/2410.15959_1729628480.png"
        },

        {
            "startTime": "09:09",
            "arxivId": "2410.15912",
            "arxivLink": "https://arxiv.org/abs/2410.15912",
            "title": "Traffic Jam? No Problem! New Benchmark Tests Autonomous Merging Skills in Dense Traffic",
            "institute": "Tsinghua University, Zhejiang University, Chinese Academy of Sciences",
            "text": "This research introduces a new benchmark called Bench4Merge, which uses real-world data to create more realistic and diverse traffic scenarios for testing autonomous vehicle merging capabilities. Unlike previous benchmarks that relied on rule-based simulations, Bench4Merge incorporates micro-level interactions between vehicles, making the testing environment more challenging and representative of real-world conditions.",
            "paper-title": "Bench4Merge: A Comprehensive Benchmark for Merging in Realistic Dense Traffic with Micro-Interactive Vehicles",
            "image-path": "flux_paper_image/2410.15912_1729628467.png"
        },

        {
            "startTime": "09:33",
            "arxivId": "2410.15371",
            "arxivLink": "https://arxiv.org/abs/2410.15371",
            "title": "Image Animation Gets a Bridge: FrameBridge Makes Videos From Stills Look Amazing!",
            "institute": "Tsinghua University",
            "text": "This paper introduces FrameBridge, a new image-to-video (I2V) generation framework that uses a data-to-data generative process instead of the traditional noise-to-data approach. This means it starts with the input image as a direct prior for the video, rather than generating from random noise.",
            "paper-title": "FrameBridge: Improving Image-to-Video Generation with Bridge Models",
            "image-path": "flux_paper_image/2410.15371_1729627884.png"
        },

        {
            "startTime": "10:02",
            "arxivId": "2410.14978",
            "arxivLink": "https://arxiv.org/abs/2410.14978",
            "title": "TV Shows: Are They Queer or Just Really, Really Close?",
            "institute": "UC Berkeley",
            "text": "This research introduces the task of \"stereotypic relationship extraction,\" which aims to model how viewers perceive relationships between characters based on their dialogue, even if those perceptions deviate from the actual relationship. This differs from traditional relation extraction, which focuses on identifying the true relationship.",
            "paper-title": "Subversive Characters and Stereotyping Readers: Characterizing Queer Relationalities with Dialogue-Based Relation Extraction",
            "image-path": "flux_paper_image/2410.14978_1729627686.png"
        },

        {
            "startTime": "10:31",
            "arxivId": "2410.15205",
            "arxivLink": "https://arxiv.org/abs/2410.15205",
            "title": "Drones Go Deep: AI Learns to Navigate Unseen Obstacles!",
            "institute": "Tsinghua University, Beijing University of Posts and Telecommunications, University of Southern California...",
            "text": "This research introduces a new method called DTPPO, which uses a Dual-Transformer Encoder to improve the generalization of multi-UAV navigation policies. Unlike previous methods, DTPPO can learn from multiple scenarios and then successfully navigate unseen environments without retraining.",
            "paper-title": "DTPPO: Dual-Transformer Encoder-based Proximal Policy Optimization for Multi-UAV Navigation in Unseen Complex Environments",
            "image-path": "flux_paper_image/2410.15205_1729628238.png"
        },

        {
            "startTime": "11:13",
            "arxivId": "2410.15115",
            "arxivLink": "https://arxiv.org/abs/2410.15115",
            "title": "Reward Hacking: When LLMs Learn to Cheat at Reasoning",
            "institute": "Tsinghua University, Shanghai Qi Zhi Institute, OpenPsi Inc.",
            "text": "This research investigates the effectiveness of using learned reward models during reinforcement learning (RL) training for improving the reasoning abilities of large language models (LLMs). Unlike previous work that primarily focused on using reward models for inference-time search, this study explores their impact on the training process itself. The authors find that while reward models can be effective at inference time, they may not always be beneficial during RL training, and can even lead to performance degradation. This is due to a phenomenon called \"reward hacking,\" where LLMs learn to generate unnecessary reasoning steps to maximize their reward, even if it doesn't improve their actual reasoning ability. To address this, the authors propose two novel techniques, Clip and Delta, which refine the reward function to prevent reward hacking and ensure that the LLM learns to reason effectively.",
            "paper-title": "On Designing Effective RL Reward at Training Time for LLM Reasoning",
            "image-path": "flux_paper_image/2410.15115_1729627473.png"
        },

        {
            "startTime": "11:37",
            "arxivId": "2410.16027",
            "arxivLink": "https://arxiv.org/abs/2410.16027",
            "title": "Reddit's Got Opinions: New AI Learns to Speak Like Your Favorite Subreddit",
            "institute": "Ohio State University, University of Washington",
            "text": "This research proposes a method to personalize language models by incorporating information about the user providing the feedback, specifically focusing on community-level preferences. This differs from previous work that typically aggregates preferences without considering individual differences, resulting in models tuned towards a hypothetical \"average\" user.",
            "paper-title": "ComPO: Community Preferences for Language Model Personalization",
            "image-path": "flux_paper_image/2410.16027_1729628090.png"
        },

        {
            "startTime": "11:58",
            "arxivId": "2410.14972",
            "arxivLink": "https://arxiv.org/abs/2410.14972",
            "title": "Visual RL Gets a Brain Boost: MoE and Task-Oriented Perturbation Make Robots Smarter",
            "institute": "Tsinghua University",
            "text": "This research introduces MENTOR, a visual reinforcement learning (RL) framework that improves sample efficiency by incorporating a Mixture-of-Experts (MoE) architecture and a task-oriented perturbation mechanism. Unlike previous methods that rely on standard multi-layer perceptrons (MLPs) or random perturbations, MENTOR leverages specialized experts and targeted perturbations to enhance learning in complex robotic tasks.",
            "paper-title": "MENTOR: Mixture-of-Experts Network with Task-Oriented Perturbation for Visual Reinforcement Learning",
            "image-path": "flux_paper_image/2410.14972_1729627424.png"
        },

        {
            "startTime": "12:26",
            "arxivId": "2410.15002",
            "arxivLink": "https://arxiv.org/abs/2410.15002",
            "title": "How Many Van Goghs Does It Take to Fake a Van Gogh?",
            "institute": "University of Washington, Bar-Ilan University, University of California Irvine...",
            "text": "This research introduces the concept of an \"imitation threshold\" for text-to-image models. It investigates how many instances of a specific concept (like an artist's style) a model needs to see during training to reliably imitate it. Unlike previous work that focused on detecting imitation, this study aims to quantify the minimum training data required for imitation.",
            "paper-title": "How Many Van Goghs Does It Take to Van Gogh? Finding the Imitation Threshold",
            "image-path": "flux_paper_image/2410.15002_1729629273.png"
        },

        {
            "startTime": "12:50",
            "arxivId": "2410.15319",
            "arxivLink": "https://arxiv.org/abs/2410.15319",
            "title": "LLMs: From Correlation to Causation, One Prompt at a Time!",
            "institute": "Zhejiang University, Mohamed bin Zayed University of Artificial Intelligence, Carnegie Mellon University",
            "text": "This research explores how to embed causal reasoning into the training process of LLMs, rather than relying on human-crafted prompts or post hoc interventions.",
            "paper-title": "Causality for Large Language Models",
            "image-path": "flux_paper_image/2410.15319_1729628749.png"
        },

        {
            "startTime": "13:14",
            "arxivId": "2410.15971",
            "arxivLink": "https://arxiv.org/abs/2410.15971",
            "title": "Scene Reconstruction From a Single Image? No Problem, Just Assemble Some Deep Priors!",
            "institute": "Tsinghua University, Wayne State University",
            "text": "This research proposes a novel framework called \"deep prior assembly\" that utilizes pre-trained large language and vision models to reconstruct 3D scenes from single images without any additional data-driven training. This approach differs from previous methods that rely on training models on specific datasets with 3D annotations.",
            "paper-title": "Zero-Shot Scene Reconstruction from Single Images with Deep Prior Assembly",
            "image-path": "flux_paper_image/2410.15971_1729628045.png"
        },

        {
            "startTime": "13:44",
            "arxivId": "2410.15173",
            "arxivLink": "https://arxiv.org/abs/2410.15173",
            "title": "LLMs: Can They Tell a Good Story?",
            "institute": "Columbia University, University of Washington",
            "text": "This research investigates whether large language models (LLMs) possess knowledge about thematic fit, a concept that measures how well an event's participants fit their roles. Unlike previous work that focused on supervised learning with proxy data, this study explores the ability of LLMs to directly estimate thematic fit using prompting techniques.",
            "paper-title": "Uncovering Autoregressive LLM Knowledge of Thematic Fit in Event Representation",
            "image-path": "flux_paper_image/2410.15173_1729628302.png"
        },

        {
            "startTime": "14:08",
            "arxivId": "2410.15003",
            "arxivLink": "https://arxiv.org/abs/2410.15003",
            "title": "Restless Bandits: A Diffusion of Brilliance for Degenerate Problems!",
            "institute": "University of Michigan, CMU",
            "text": "This research introduces a diffusion system to approximate the behavior of restless bandits, particularly in degenerate scenarios. Unlike previous work that relied on fluid approximations, this approach incorporates both the mean and variance of the stochastic processes, leading to a more accurate representation of the bandit dynamics.",
            "paper-title": "Achieving O(1/N) Optimality Gap in Restless Bandits through Diffusion Approximation",
            "image-path": "flux_paper_image/2410.15003_1729628277.png"
        },

        {
            "startTime": "14:33",
            "arxivId": "2410.15655",
            "arxivLink": "https://arxiv.org/abs/2410.15655",
            "title": "Missing Covariates? No Problem! New Method Tightens Treatment Effect Bounds.",
            "institute": "Carnegie Mellon University",
            "text": "This paper introduces a novel partial identification strategy for estimating heterogeneous treatment effects when new covariates are observed in the target population. It leverages ideas from ecological inference, which has not been widely used in causal settings before.",
            "paper-title": "Accounting for Missing Covariates in Heterogeneous Treatment Estimation",
            "image-path": "flux_paper_image/2410.15655_1729628654.png"
        },

        {
            "startTime": "14:57",
            "arxivId": "2410.15026",
            "arxivLink": "https://arxiv.org/abs/2410.15026",
            "title": "Say Goodbye to Information Overload: A New Recommendation System That's Smarter Than Your Average Algorithm",
            "institute": "Carnegie Mellon University, Southwest Jiaotong University, Washington University in St. Louis...",
            "text": "This research introduces a recommendation system model that utilizes a \"separation embedding cross-network.\" This approach differs from previous models by independently performing feature cross-operations on different dimensions, allowing for more targeted interaction modeling and a deeper understanding of feature relationships.",
            "paper-title": "A Recommendation Model Utilizing Separation Embedding and Self-Attention for Feature Mining",
            "image-path": "flux_paper_image/2410.15026_1729629474.png"
        },

        {
            "startTime": "15:23",
            "arxivId": "2410.15543",
            "arxivLink": "https://arxiv.org/abs/2410.15543",
            "title": "Constrained Communication? No Problem! Distributed Thompson Sampling for Bayesian Optimization",
            "institute": "Harvard University",
            "text": "This research introduces a distributed Thompson sampling algorithm for Bayesian optimization that works even when communication between agents is limited. Unlike previous work that requires fully connected networks, this algorithm leverages the structure of the communication graph to achieve theoretical guarantees on regret.",
            "paper-title": "Distributed Thompson sampling under constrained communication",
            "image-path": "flux_paper_image/2410.15543_1729629170.png"
        },

        {
            "startTime": "15:43",
            "arxivId": "2410.14875",
            "arxivLink": "https://arxiv.org/abs/2410.14875",
            "title": "AI Text Detectives: Which LLMs Are the Sneakiest?",
            "institute": "University of Cambridge, Texas A&M University",
            "text": "This research focuses on analyzing the detectability of different LLMs, rather than just focusing on evading detection or evaluating detection on out-of-distribution texts.",
            "paper-title": "Which LLMs are Difficult to Detect? A Detailed Analysis of Potential Factors Contributing to Difficulties in LLM Text Detection",
            "image-path": "flux_paper_image/2410.14875_1729628589.png"
        },

        {
            "startTime": "16:01",
            "arxivId": "2410.15234",
            "arxivLink": "https://arxiv.org/abs/2410.15234",
            "title": "LLMs: From Echo Chambers to Echoing Bias?",
            "institute": "University College London",
            "text": "This research focuses on bias amplification in LLMs, specifically how models trained on synthetic data can amplify existing biases over successive training iterations. This is distinct from previous work on model collapse, which focuses on the degradation of model performance due to statistical approximation and functional expressivity errors.",
            "paper-title": "Bias Amplification: Language Models as Increasingly Biased Media",
            "image-path": "flux_paper_image/2410.15234_1729627590.png"
        },

        {
            "startTime": "16:30",
            "arxivId": "2410.15461",
            "arxivLink": "https://arxiv.org/abs/2410.15461",
            "title": "World Models Get a Makeover: Predicting the Future, One Frame at a Time!",
            "institute": "Hong Kong University of Science and Technology, Peking University",
            "text": "This research introduces a new benchmark, EVA-Bench, specifically designed to evaluate the video prediction capabilities of world models in embodied scenes. It also proposes a novel world model, EVA, which integrates a video generation model with a visual language model, enabling it to generate predictive videos based on multimodal instructions.",
            "paper-title": "EVA: An Embodied World Model for Future Video Anticipation",
            "image-path": "flux_paper_image/2410.15461_1729627659.png"
        },

        {
            "startTime": "17:07",
            "arxivId": "2410.15332",
            "arxivLink": "https://arxiv.org/abs/2410.15332",
            "title": "LLM Serving Gets a Speed Boost: Position-Independent Caching to the Rescue!",
            "institute": "Peking University, Nanjing University, Huawei Cloud",
            "text": "This paper introduces a new approach called position-independent context caching (PIC) that allows for the reuse of cached results even when the order of tokens in a prompt changes. This is different from previous prefix-based caching methods, which require an exact match in the prefix tokens.",
            "paper-title": "EPIC: Efficient Position-Independent Context Caching for Serving Large Language Models",
            "image-path": "flux_paper_image/2410.15332_1729628925.png"
        },

        {
            "startTime": "17:22",
            "arxivId": "2410.15362",
            "arxivLink": "https://arxiv.org/abs/2410.15362",
            "title": "Faster-GCG: Jailbreaking LLMs with a Speed Boost!",
            "institute": "Tsinghua University, Duke University, Aalborg University",
            "text": "This research proposes Faster-GCG, a method that improves the efficiency of the GCG jailbreak attack by addressing several limitations. Unlike previous work, Faster-GCG introduces techniques to enhance the accuracy of gradient information and avoid redundant cycles during optimization.",
            "paper-title": "Faster-GCG: Efficient Discrete Optimization Jailbreak Attacks against Aligned Large Language Models",
            "image-path": "flux_paper_image/2410.15362_1729628387.png"
        },

        {
            "startTime": "17:48",
            "arxivId": "2410.15553",
            "arxivLink": "https://arxiv.org/abs/2410.15553",
            "title": "LLMs on Trial: Can They Follow Multi-Turn, Multilingual Instructions?",
            "institute": "Meta",
            "text": "This research introduces Multi-IF, a new benchmark for evaluating LLMs' ability to follow instructions across multiple turns and languages. Unlike previous benchmarks that focus on single-turn, monolingual instructions, Multi-IF assesses LLMs' performance in more realistic conversational settings.",
            "paper-title": "Multi-IF: Benchmarking LLMs on Multi-Turn and Multilingual Instructions Following",
            "image-path": "flux_paper_image/2410.15553_1729629064.png"
        },

        {
            "startTime": "18:16",
            "arxivId": "2410.14803",
            "arxivLink": "https://arxiv.org/abs/2410.14803",
            "title": "DistRL: Reinforcement Learning for Mobile Agents, It's Like Training a Dog, But for Your Phone!",
            "institute": "University of Cambridge, Huawei",
            "text": "This research introduces DistRL, a framework for training mobile agents using reinforcement learning. DistRL differs from previous work by employing a distributed, asynchronous architecture for data collection and a novel off-policy algorithm, A-RIDE, specifically designed for this setting.",
            "paper-title": "DistRL: An Asynchronous Distributed Reinforcement Learning Framework for On-Device Control Agents",
            "image-path": "flux_paper_image/2410.14803_1729629215.png"
        },

        {
            "startTime": "18:43",
            "arxivId": "2410.15787",
            "arxivLink": "https://arxiv.org/abs/2410.15787",
            "title": "Transformers Learn to Add, Multiply, and Even Count!",
            "institute": "Korea Advanced Institute of Science and Technology, Google",
            "text": "This research focuses on length generalization in arithmetic tasks, specifically multi-operand addition and multiplication. Unlike previous work that focused on fixed operand counts or lengths, this paper achieves length generalization in both operand length and count.",
            "paper-title": "Arithmetic Transformers Can Length-Generalize in Both Operand Length and Count",
            "image-path": "flux_paper_image/2410.15787_1729628392.png"
        },

        {
            "startTime": "19:04",
            "arxivId": "2410.15778",
            "arxivLink": "https://arxiv.org/abs/2410.15778",
            "title": "Vision Models: Steering Clear of Hallucinations with Latent Space Tweaks!",
            "institute": "Stanford University",
            "text": "This research focuses on the unique structure of vision-language models (VLMs) and how their separate pre-training of image encoders and text decoders can lead to hallucinations. It proposes a novel technique called Visual and Textual Intervention (VTI) to reduce these hallucinations by steering latent space representations during inference.",
            "paper-title": "Reducing Hallucinations in Vision-Language Models via Latent Space Steering",
            "image-path": "flux_paper_image/2410.15778_1729627778.png"
        },

        {
            "startTime": "19:26",
            "arxivId": "2410.15221",
            "arxivLink": "https://arxiv.org/abs/2410.15221",
            "title": "IntersectionZoo: Eco-Driving Gets a Multi-Agent Makeover!",
            "institute": "MIT, ETH Zurich",
            "text": "This research introduces IntersectionZoo, a benchmark suite for multi-agent contextual reinforcement learning (CRL) based on the real-world application of cooperative eco-driving. Unlike previous benchmarks, IntersectionZoo uses data-informed simulations of 16,334 signalized intersections derived from 10 major US cities, providing a more realistic and comprehensive evaluation of CRL algorithms.",
            "paper-title": "IntersectionZoo: Eco-driving for Benchmarking Multi-Agent Contextual Reinforcement Learning",
            "image-path": "flux_paper_image/2410.15221_1729629189.png"
        },

        {
            "startTime": "19:46",
            "arxivId": "2410.15702",
            "arxivLink": "https://arxiv.org/abs/2410.15702",
            "title": "LLMs in Medicine: A Decoding Dance to Stop Hallucinations!",
            "institute": "University of Science and Technology of China, Tencent, City University of Hong Kong...",
            "text": "This research introduces a new decoding strategy called ALCD (Alternate Contrastive Decoding) to mitigate hallucinations in LLMs specifically for medical information extraction tasks. Unlike previous contrastive decoding methods, ALCD focuses on decoupling the identification and classification abilities of LLMs during fine-tuning and then utilizes an alternating contrastive decoding process during inference.",
            "paper-title": "Mitigating Hallucinations of Large Language Models in Medical Information Extraction via Contrastive Decoding",
            "image-path": "flux_paper_image/2410.15702_1729628604.png"
        },

        {
            "startTime": "20:13",
            "arxivId": "2410.15567",
            "arxivLink": "https://arxiv.org/abs/2410.15567",
            "title": "Pruning LLMs: A One-Shot Solution for Slimmer, Smarter Models",
            "institute": "Northeastern University, Meta",
            "text": "This research tackles the challenge of pruning large language models (LLMs) without retraining, which is a costly and resource-intensive process. Unlike previous methods that rely on the Single Removal Problem (SRP) and its approximations, this paper directly formulates the Multiple Removal Problem (MRP) for layer-wise LLM pruning, enabling simultaneous pruning of multiple weights.",
            "paper-title": "Pruning Foundation Models for High Accuracy without Retraining",
            "image-path": "flux_paper_image/2410.15567_1729628124.png"
        },

        {
            "startTime": "20:41",
            "arxivId": "2410.15057",
            "arxivLink": "https://arxiv.org/abs/2410.15057",
            "title": "Stop Peeking! Time-Uniform Confidence Sequences for Stochastic Approximation",
            "institute": "Peking University",
            "text": "This paper introduces asymptotic time-uniform confidence sequences for parameters in stochastic approximation (SA) algorithms. Unlike previous work that focused on fixed-time inference, this research provides guarantees that hold uniformly across all times, addressing the \"peeking\" issue in sequential experimental design.",
            "paper-title": "Asymptotic Time-Uniform Inference for Parameters in Averaged Stochastic Approximation",
            "image-path": "flux_paper_image/2410.15057_1729628190.png"
        },

        {
            "startTime": "21:07",
            "arxivId": "2410.14745",
            "arxivLink": "https://arxiv.org/abs/2410.14745",
            "title": "LLMs on a Diet: How to Fine-Tune Big Models with Tiny Data",
            "institute": "Peking University, UC Los Angeles, University of Washington",
            "text": "This paper introduces SEMIEVOL, a semi-supervised fine-tuning framework for LLMs that leverages both labeled and unlabeled data. Unlike previous methods that focus on single data types, SEMIEVOL combines in-weight and in-context knowledge propagation with collaborative learning and adaptive selection to improve model performance.",
            "paper-title": "SemiEvol: Semi-supervised Fine-tuning for LLM Adaptation",
            "image-path": "flux_paper_image/2410.14745_1729627575.png"
        },

        {
            "startTime": "21:39",
            "arxivId": "2410.16083",
            "arxivLink": "https://arxiv.org/abs/2410.16083",
            "title": "Tired of Self-Driving Cars Getting Lost? This New Research Might Have the Answer!",
            "institute": "Peking University",
            "text": "This research focuses on identifying \"critical examples\" in vehicle trajectory prediction, which are situations that are difficult for current models to predict. Unlike previous work that focuses on improving overall prediction accuracy, this paper proposes a model-irrelevant method for mining these critical examples, using a flow-based generative model to estimate the rareness and hardness of trajectories.",
            "paper-title": "Critical Example Mining for Vehicle Trajectory Prediction using Flow-based Generative Models",
            "image-path": "flux_paper_image/2410.16083_1729627705.png"
        },

        {
            "startTime": "22:02",
            "arxivId": "2410.15226",
            "arxivLink": "https://arxiv.org/abs/2410.15226",
            "title": "LLMs Love Diversity: How Synthetic Data Makes Language Models Smarter",
            "institute": "CMU, Microsoft",
            "text": "This research introduces a new metric, LLM Cluster-agent, to measure the diversity of synthetic data used to train large language models (LLMs). Unlike previous metrics, LLM Cluster-agent leverages the LLMs themselves to understand the semantic nuances of the data and identify diverse clusters.",
            "paper-title": "On the Diversity of Synthetic Data and its Impact on Training Large Language Models",
            "image-path": "flux_paper_image/2410.15226_1729628065.png"
        },

        {
            "startTime": "22:46",
            "arxivId": "2410.14895",
            "arxivLink": "https://arxiv.org/abs/2410.14895",
            "title": "Diffusion Models: Training for Generation, Not Just Denoising!",
            "institute": "Carnegie Mellon University, NVIDIA",
            "text": "This paper introduces Truncated Consistency Models (TCM), a new training algorithm for consistency models that focuses on improving generation performance by explicitly reducing the network capacity dedicated to denoising tasks at earlier timesteps. This is different from previous work, which trained consistency models to map all intermediate points along the PFODE trajectory to their corresponding endpoints, leading to a trade-off between denoising and generation.",
            "paper-title": "Truncated Consistency Models",
            "image-path": "flux_paper_image/2410.14895_1729628557.png"
        },

        {
            "startTime": "23:13",
            "arxivId": "2410.14919",
            "arxivLink": "https://arxiv.org/abs/2410.14919",
            "title": "Diffusion Distillation Gets a Boost: Adversarial Loss Makes Images Even More Real!",
            "institute": "The University of Texas at Austin, Google",
            "text": "This research introduces SiDA, a new method for diffusion model distillation that incorporates adversarial loss. Unlike previous data-free methods, SiDA leverages real images to improve the accuracy of the distilled model's score function, leading to more realistic image generation.",
            "paper-title": "Adversarial Score identity Distillation: Rapidly Surpassing the Teacher in One Step",
            "image-path": "flux_paper_image/2410.14919_1729629529.png"
        },

        {
            "startTime": "23:36",
            "arxivId": "2410.14802",
            "arxivLink": "https://arxiv.org/abs/2410.14802",
            "title": "SAM's Secret Weapon: Balancedness Makes Deep Learning Models More Stable",
            "institute": "ETH Zurich",
            "text": "This research introduces a new metric called \"balancedness\" to analyze the implicit regularization of Sharpness-Aware Minimization (SAM). Unlike previous work that focused on sharpness, balancedness considers the difference between the squared norms of two groups of variables, allowing for a more comprehensive understanding of SAM's behavior.",
            "paper-title": "Implicit Regularization of Sharpness-Aware Minimization for Scale-Invariant Problems",
            "image-path": "flux_paper_image/2410.14802_1729627823.png"
        },

        {
            "startTime": "24:06",
            "arxivId": "2410.14986",
            "arxivLink": "https://arxiv.org/abs/2410.14986",
            "title": "NeuralMAG: Deep Learning Makes Micromagnetics a Breeze!",
            "institute": "Tsinghua University",
            "text": "This research introduces NeuralMAG, a deep learning approach to micromagnetic simulation that accelerates the computation of the demagnetizing field, a key component in understanding magnetic behavior. Unlike previous neural methods that focus on specific tasks, NeuralMAG concentrates on the core computation, making it inherently generalizable across various scales and configurations.",
            "paper-title": "NeuralMAG: Fast and Generalizable Micromagnetic Simulation with Deep Neural Nets",
            "image-path": "flux_paper_image/2410.14986_1729628326.png"
        },

        {
            "startTime": "24:23",
            "arxivId": "2410.15615",
            "arxivLink": "https://arxiv.org/abs/2410.15615",
            "title": "3D Visual Grounding: Top-Down, Bottom-Up, and a Whole Lot of Fun!",
            "institute": "Peking University",
            "text": "This paper proposes a novel framework for 3D visual grounding that combines the strengths of both top-down and bottom-up approaches. Unlike previous methods that rely solely on one approach, this framework leverages both to generate more accurate and efficient results.",
            "paper-title": "Joint Top-Down and Bottom-Up Frameworks for 3D Visual Grounding",
            "image-path": "flux_paper_image/2410.15615_1729628861.png"
        },

        {
            "startTime": "24:51",
            "arxivId": "2410.15322",
            "arxivLink": "https://arxiv.org/abs/2410.15322",
            "title": "FoMo: The Foundation Model That's Got Mobile Traffic Forecasting on Lock!",
            "institute": "Tsinghua University, China Mobile",
            "text": "This research proposes a foundation model for mobile traffic forecasting, called FoMo, which is trained on a massive dataset of mobile traffic data and can handle diverse forecasting tasks across multiple cities. Unlike previous models that are typically tailored to specific tasks, FoMo aims to be a one-for-all solution for mobile network planning and optimization.",
            "paper-title": "FoMo: A Foundation Model for Mobile Traffic Forecasting with Diffusion Model",
            "image-path": "flux_paper_image/2410.15322_1729629251.png"
        },

        {
            "startTime": "25:17",
            "arxivId": "2410.14940",
            "arxivLink": "https://arxiv.org/abs/2410.14940",
            "title": "Baichuan Alignment: Unlocking the Secrets of AI's Inner Workings",
            "institute": "Baichuan Inc., Peking University",
            "text": "This research provides a detailed analysis of the alignment techniques used in the Baichuan series of models, offering a comprehensive account of alignment methodologies that goes beyond previous fragmented research efforts.",
            "paper-title": "Baichuan Alignment Technical Report",
            "image-path": "flux_paper_image/2410.14940_1729627956.png"
        },

        {
            "startTime": "25:33",
            "arxivId": "2410.15393",
            "arxivLink": "https://arxiv.org/abs/2410.15393",
            "title": "LLMs as Judges? Not So Fast! Calibrating Bias for Fairer AI Evaluations.",
            "institute": "Tsinghua University",
            "text": "This research introduces CalibraEval, a label-free method for mitigating selection bias in LLMs used for evaluating text quality. Unlike previous approaches that rely on explicit labels or complex mathematical models, CalibraEval leverages a non-parametric order-preserving algorithm to adjust prediction distributions, making it more efficient and scalable.",
            "paper-title": "CalibraEval: Calibrating Prediction Distribution to Mitigate Selection Bias in LLMs-as-Judges",
            "image-path": "flux_paper_image/2410.15393_1729627536.png"
        },

        {
            "startTime": "26:01",
            "arxivId": "2410.15859",
            "arxivLink": "https://arxiv.org/abs/2410.15859",
            "title": "LLMs Get a New Trick: Weaving Position Encoding for Longer Inputs!",
            "institute": "Tsinghua University",
            "text": "This paper introduces a novel method called Mesa-Extrapolation, which utilizes a chunk-based triangular attention matrix and Stair PE to enhance the extrapolation capabilities of LLMs. Unlike previous work, this method does not require additional training or fine-tuning.",
            "paper-title": "Mesa-Extrapolation: A Weave Position Encoding Method for Enhanced Extrapolation in LLMs",
            "image-path": "flux_paper_image/2410.15859_1729629642.png"
        },

        {
            "startTime": "26:31",
            "arxivId": "2410.15581",
            "arxivLink": "https://arxiv.org/abs/2410.15581",
            "title": "Embryo Selection Gets a Tech Makeover: AI Predicts Viability with Video and EHR Data!",
            "institute": "Harvard University",
            "text": "This research introduces a multimodal model for predicting embryo viability in IVF, combining time-lapse video data with Electronic Health Records (EHRs). Unlike previous work that focused solely on visual features, this approach integrates diverse data sources for a more comprehensive assessment.",
            "paper-title": "Multimodal Learning for Embryo Viability Prediction in Clinical IVF",
            "image-path": "flux_paper_image/2410.15581_1729629492.png"
        },

        {
            "startTime": "26:56",
            "arxivId": "2410.16032",
            "arxivLink": "https://arxiv.org/abs/2410.16032",
            "title": "Time Series Analysis Gets a Multi-Scale Makeover: TIMEMIXER++ Shakes Up the Game!",
            "institute": "Hong Kong University of Science and Technology, MIT, Zhejiang University",
            "text": "This research introduces TIMEMIXER++, a time series pattern machine that processes multi-scale time series data by transforming them into multi-resolution time images. This approach allows for more comprehensive pattern extraction across both temporal and frequency domains, compared to previous methods that often struggle with long-range dependencies.",
            "paper-title": "TimeMixer++: A General Time Series Pattern Machine for Universal Predictive Analysis",
            "image-path": "flux_paper_image/2410.16032_1729628223.png"
        },

        {
            "startTime": "27:21",
            "arxivId": "2410.15155",
            "arxivLink": "https://arxiv.org/abs/2410.15155",
            "title": "Analog AI Training Gets a Speed Boost with Pipeline Parallelism!",
            "institute": "Rensselaer, IBM",
            "text": "This research proposes both synchronous and asynchronous pipeline parallelism for analog in-memory computing (AIMC) accelerators, addressing the challenge of data parallelism limitations in AIMC architectures. Unlike previous work focusing on synchronous pipelines, this paper introduces the first asynchronous pipeline training algorithm for AIMC accelerators.",
            "paper-title": "Pipeline Gradient-based Model Training on Analog In-memory Accelerators",
            "image-path": "flux_paper_image/2410.15155_1729629284.png"
        },

        {
            "startTime": "27:48",
            "arxivId": "2410.15483",
            "arxivLink": "https://arxiv.org/abs/2410.15483",
            "title": "LLMs: Forgetful Friends? New Methods Help Them Remember!",
            "institute": "Rensselaer, IBM",
            "text": "This research tackles the issue of forgetting in LLMs during post-training, where the model loses information learned in earlier stages. It proposes two new methods, ALRIGHT and MAXRIGHT, that address this problem by jointly optimizing the supervised fine-tuning (SFT) and preference learning (DPO) objectives.",
            "paper-title": "Mitigating Forgetting in LLM Supervised Fine-Tuning and Preference Learning",
            "image-path": "flux_paper_image/2410.15483_1729628659.png"
        },

        {
            "startTime": "28:13",
            "arxivId": "2410.14952",
            "arxivLink": "https://arxiv.org/abs/2410.14952",
            "title": "AI Surrogates: Ocean Forecasting Gets a Speed Boost!",
            "institute": "University of Florida, William & Mary, Nvidia",
            "text": "This research introduces a 4D Swin Transformer-based AI surrogate for coastal ocean circulation modeling, which differs from previous work by incorporating a physics-based constraint to ensure reliable forecasting results.",
            "paper-title": "A Fast AI Surrogate for Coastal Ocean Circulation Models",
            "image-path": "flux_paper_image/2410.14952_1729629350.png"
        },

        {
            "startTime": "28:34",
            "arxivId": "2410.16033",
            "arxivLink": "https://arxiv.org/abs/2410.16033",
            "title": "TreeBoN: A Tree-mendous Way to Make LLMs More Human-Like!",
            "institute": "Princeton University, University of Michigan, Oregon State University...",
            "text": "This research introduces TreeBoN, a novel framework that integrates a speculative tree-search strategy into Best-of-N (BoN) Sampling. Unlike previous methods that rely on the assumption that partial rewards are positively correlated with full-response rewards, TreeBoN leverages a weighted implicit reward from a Direct Preference Optimization (DPO) policy model to evaluate partial responses more accurately.",
            "paper-title": "TreeBoN: Enhancing Inference-Time Alignment with Speculative Tree-Search and Best-of-N Sampling",
            "image-path": "flux_paper_image/2410.16033_1729628633.png"
        },

        {
            "startTime": "29:01",
            "arxivId": "2410.15336",
            "arxivLink": "https://arxiv.org/abs/2410.15336",
            "title": "Sampling Made Easy: PINNs to the Rescue!",
            "institute": "Peking University",
            "text": "This paper proposes a new diffusion-based sampling algorithm called Diffusion-PINNSampler (DPS) that uses physics-informed neural networks (PINNs) to estimate the drift term in the reverse stochastic differential equation (SDE). This approach differs from previous methods by solving the log-density Fokker-Planck equation (log-density FPE) instead of the score FPE, which is shown to be more effective in identifying mixing proportions for multi-modal distributions.",
            "paper-title": "Diffusion-PINN Sampler",
            "image-path": "flux_paper_image/2410.15336_1729628310.png"
        },

        {
            "startTime": "29:32",
            "arxivId": "2410.15297",
            "arxivLink": "https://arxiv.org/abs/2410.15297",
            "title": "Chatbots Get Chatty: New Research Makes AI Conversations More Engaging",
            "institute": "Nanyang Technological University, Google Cloud AI, Amazon AGI...",
            "text": "This research redefines proactivity in information-seeking dialogue (ISD) by focusing on how each response actively engages the user and sustains the conversation, rather than just providing answers. It introduces a new definition of proactivity that emphasizes generating responses that include additional information related to the initial query, prompting further inquiries and extending the conversation.",
            "paper-title": "Redefining Proactivity for Information Seeking Dialogue",
            "image-path": "flux_paper_image/2410.15297_1729628098.png"
        },

        {
            "startTime": "29:54",
            "arxivId": "2410.15086",
            "arxivLink": "https://arxiv.org/abs/2410.15086",
            "title": "Heuristic Analysis Gets a Makeover: XPlain Explains Why Your Algorithms Break!",
            "institute": "MIT, EPFL, Microsoft Research...",
            "text": "This research introduces XPlain, a tool that extends existing heuristic analyzers by not only identifying when heuristics underperform but also explaining why. This goes beyond previous work, which only provided a single adversarial input instance without explaining the underlying cause.",
            "paper-title": "Towards Safer Heuristics With XPlain",
            "image-path": "flux_paper_image/2410.15086_1729628473.png"
        },

        {
            "startTime": "30:20",
            "arxivId": "2410.14993",
            "arxivLink": "https://arxiv.org/abs/2410.14993",
            "title": "Video Understanding: Making Every Frame Count, Even in Hours-Long Videos!",
            "institute": "Nanjing University, Microsoft Research",
            "text": "This research introduces C-VUE, a continuous video understanding system that uses adaptive state modeling to efficiently process long videos. Unlike previous methods that rely on fixed-size windows or all-frame processing, C-VUE dynamically adjusts its hidden state based on the input, enabling it to handle multi-scale events and long-range history.",
            "paper-title": "Making Every Frame Matter: Continuous Video Understanding for Large Models via Adaptive State Modeling",
            "image-path": "flux_paper_image/2410.14993_1729629143.png"
        },

        {
            "startTime": "30:48",
            "arxivId": "2410.16006",
            "arxivLink": "https://arxiv.org/abs/2410.16006",
            "title": "Teaching LLMs New Languages Without Forgetting Their Old Tricks",
            "institute": "Microsoft",
            "text": "This research explores the impact of task similarity on the ability of large language models (LLMs) to learn new languages through continual fine-tuning (CFT). Unlike previous work that focuses on mitigating catastrophic forgetting, this study investigates how the nature of the tasks encoded in the training data influences the model's performance.",
            "paper-title": "Exploring Continual Fine-Tuning for Enhancing Language Ability in Large Language Model",
            "image-path": "flux_paper_image/2410.16006_1729628841.png"
        },

        {
            "startTime": "31:13",
            "arxivId": "2410.15625",
            "arxivLink": "https://arxiv.org/abs/2410.15625",
            "title": "LLMs: From Code Poets to Performance Engineers?",
            "institute": "Stanford University, Intel, Nvidia...",
            "text": "This research uses LLMs to automatically generate code for \"mappers,\" which are programs that optimize how parallel tasks are assigned to processors and data is stored in memory. This is different from previous work that focused on using machine learning to predict the best mapping strategy, but not to generate the code itself.",
            "paper-title": "Improving Parallel Program Performance Through DSL-Driven Code Generation with LLM Optimizers",
            "image-path": "flux_paper_image/2410.15625_1729627868.png"
        },

        {
            "startTime": "31:35",
            "arxivId": "2410.15653",
            "arxivLink": "https://arxiv.org/abs/2410.15653",
            "title": "Gen-AI in Finance: From Chatbots to Trading Bots, It's a Wild Ride!",
            "institute": "Google",
            "text": "This research provides a comprehensive overview of the opportunities and challenges of using Generative AI (Gen-AI) in the finance domain, focusing on the unique aspects of this application and highlighting areas for future research.",
            "paper-title": "Opportunities and Challenges of Generative-AI in Finance",
            "image-path": "flux_paper_image/2410.15653_1729629369.png"
        },

        {
            "startTime": "31:52",
            "arxivId": "2410.15706",
            "arxivLink": "https://arxiv.org/abs/2410.15706",
            "title": "Unmasking Hidden Factors: A New Way to Predict How You'll React to Different Doses",
            "institute": "Tsinghua University",
            "text": "This research introduces ContiVAE, a framework that estimates individual dose-response curves for continuous treatments while accounting for unobserved confounders. Unlike previous methods, ContiVAE models these confounders as latent variables, allowing for more accurate predictions even when not all influencing factors are known.",
            "paper-title": "Estimating Individual Dose-Response Curves under Unobserved Confounders from Observational Data",
            "image-path": "flux_paper_image/2410.15706_1729629585.png"
        },

        {
            "startTime": "32:17",
            "arxivId": "2410.15555",
            "arxivLink": "https://arxiv.org/abs/2410.15555",
            "title": "LLMs Go Bayesian: Concept Hunting with a Language Model Twist!",
            "institute": "University of California San Francisco, Microsoft Research, National University of Singapore",
            "text": "This research proposes a novel approach to Concept Bottleneck Models (CBMs) by integrating Large Language Models (LLMs) within a Bayesian framework. Unlike previous methods that rely on pre-defined concepts or LLMs as simple stand-ins for human experts, this approach iteratively explores concepts using LLMs as both a concept extraction mechanism and a prior.",
            "paper-title": "Bayesian Concept Bottleneck Models with LLM Priors",
            "image-path": "flux_paper_image/2410.15555_1729629162.png"
        },

        {
            "startTime": "32:46",
            "arxivId": "2410.14968",
            "arxivLink": "https://arxiv.org/abs/2410.14968",
            "title": "Robot Assembly: Learning to Juggle Pegs and Holes with Data Augmentation!",
            "institute": "University of Minnesota, Google",
            "text": "This research focuses on learning robust visual-force policies for object assembly tasks, specifically the contact phase. It introduces a novel data augmentation method that expands human demonstrations by replaying trajectories with variations in object shape, grasp pose, and sensor noise. This approach aims to improve the model's generalization ability to unseen task variations.",
            "paper-title": "AugInsert: Learning Robust Visual-Force Policies via Data Augmentation for Object Assembly Tasks",
            "image-path": "flux_paper_image/2410.14968_1729628412.png"
        },

        {
            "startTime": "33:12",
            "arxivId": "2410.14970",
            "arxivLink": "https://arxiv.org/abs/2410.14970",
            "title": "Predicting Your Next Ramen Spot: Taming the Long Tail of Human Mobility",
            "institute": "University of Tokyo",
            "text": "This research tackles the long-tail problem in human mobility prediction, where AI models struggle to predict visits to less popular locations. It introduces a new framework called LoTNext that uses graph adjustment and loss adjustment techniques to improve the prediction of these \"long-tail\" POIs.",
            "paper-title": "Taming the Long Tail in Human Mobility Prediction",
            "image-path": "flux_paper_image/2410.14970_1729628072.png"
        },

        {
            "startTime": "33:36",
            "arxivId": "2410.15907",
            "arxivLink": "https://arxiv.org/abs/2410.15907",
            "title": "Seismic Phase Picking: Can AI Outsmart Earth's Tremors?",
            "institute": "Peking University",
            "text": "This research explores the use of both traditional and learning-based methods for automatic seismic phase picking, focusing on single-trace analysis and proposing future directions for multi-trace approaches.",
            "paper-title": "Seismic Phase Picking",
            "image-path": "flux_paper_image/2410.15907_1729627940.png"
        },

        {
            "startTime": "33:56",
            "arxivId": "2410.15469",
            "arxivLink": "https://arxiv.org/abs/2410.15469",
            "title": "Lego-Learning Robots: Building the Future, Brick by Brick!",
            "institute": "CMU",
            "text": "This research focuses on 3D combinatorial assembly completion, a task where robots must infer the intended structure from an incomplete assembly and complete it using unit primitives like Lego bricks. This differs from previous work on 3D shape completion, which focuses on reconstructing objects from incomplete data, and 3D part assembly, which uses pre-defined parts.",
            "paper-title": "AssemblyComplete: 3D Combinatorial Construction with Deep Reinforcement Learning",
            "image-path": "flux_paper_image/2410.15469_1729629389.png"
        },

        {
            "startTime": "34:21",
            "arxivId": "2410.15128",
            "arxivLink": "https://arxiv.org/abs/2410.15128",
            "title": "Simulating Transitions: A Flow Matching Dance Between Metastable States",
            "institute": "Tokyo Tech, MIT, Vector Institute...",
            "text": "This research proposes a generalized flow matching framework for simulating transition dynamics between metastable states. Unlike previous methods that rely on extensive energy evaluations, this approach leverages short-run molecular dynamics simulations to learn a surrogate potential energy function, reducing computational cost.",
            "paper-title": "Generalized Flow Matching for Transition Dynamics Modeling",
            "image-path": "flux_paper_image/2410.15128_1729628787.png"
        },

        {
            "startTime": "34:46",
            "arxivId": "2410.16011",
            "arxivLink": "https://arxiv.org/abs/2410.16011",
            "title": "Latency Lies: Unmasking the Truth About Speech Translation Speed",
            "institute": "CMU, UC Santa Barbara",
            "text": "This research addresses a fundamental misconception in how computation-aware latency is measured for simultaneous speech translation systems. Existing metrics tend to overestimate latency, especially for longer speech segments, due to an incorrect assumption about how the system processes speech and generates translations. The paper proposes a new method, CA*, to accurately measure computation-aware latency by accounting for the parallel nature of speech processing and translation generation.",
            "paper-title": "CA*: Addressing Evaluation Pitfalls in Computation-Aware Latency for Simultaneous Speech Translation",
            "image-path": "flux_paper_image/2410.16011_1729628598.png"
        },

        {
            "startTime": "35:14",
            "arxivId": "2410.15074",
            "arxivLink": "https://arxiv.org/abs/2410.15074",
            "title": "Ultrasound Chatbot Speaks Chinese: LLaVA-Ultra Makes Medical Images Talk!",
            "institute": "Zhejiang University, University of Washington",
            "text": "This research focuses on fine-tuning a multimodal large language model (MLLM) for Chinese medical visual conversations, specifically for ultrasound images. It introduces a novel visual enhancement module using the Segment Anything Model (SAM) to improve the model's ability to understand subtle visual semantics in medical images. Additionally, it addresses the issue of data redundancy common in medical scenarios by designing an adaptive sampling module that automatically screens valid images.",
            "paper-title": "LLaVA-Ultra: Large Chinese Language and Vision Assistant for Ultrasound",
            "image-path": "flux_paper_image/2410.15074_1729628199.png"
        },

        {
            "startTime": "35:42",
            "arxivId": "2410.15841",
            "arxivLink": "https://arxiv.org/abs/2410.15841",
            "title": "Reinforcement Learning Gets a Social Upgrade: Graph Modeling for Smarter Agents",
            "institute": "University of Illinois at Chicago, Peking University",
            "text": "This research introduces a novel approach called Factor-based Multi-Agent Transformer (f-MAT) that utilizes graph modeling to improve communication and collaboration among agents in multi-agent reinforcement learning (MARL) systems. Unlike previous methods that focus on communication between individual agents, f-MAT enables efficient message passing at the group level, reducing computational complexity and enhancing cooperative policy learning.",
            "paper-title": "Towards Efficient Collaboration via Graph Modeling in Reinforcement Learning",
            "image-path": "flux_paper_image/2410.15841_1729627639.png"
        },

        {
            "startTime": "36:06",
            "arxivId": "2410.14770",
            "arxivLink": "https://arxiv.org/abs/2410.14770",
            "title": "Fractured Objects: A Deep Dive into Reassembly Research",
            "institute": "University of Texas at Austin, Texas A&M University, Tsinghua University...",
            "text": "This survey focuses on the reassembly of fractured objects, covering both traditional and deep learning approaches. It distinguishes itself by emphasizing the unique challenges and opportunities presented by this specific problem within the broader field of geometry processing and shape analysis.",
            "paper-title": "A Survey on Computational Solutions for Reconstructing Complete Objects by Reassembling Their Fractured Parts",
            "image-path": "flux_paper_image/2410.14770_1729628801.png"
        },

        {
            "startTime": "36:34",
            "arxivId": "2410.15748",
            "arxivLink": "https://arxiv.org/abs/2410.15748",
            "title": "Mathlib's Magic Potion: Brewing Up 6 Million Theorems with Symbolic Mutation",
            "institute": "Microsoft",
            "text": "This research proposes Alchemy, a framework for synthesizing formal theorems in symbolic space. Unlike previous work that focuses on autoformalization, Alchemy directly manipulates existing theorems within the Lean theorem prover, leveraging tactics like \"rw\" and \"apply\" to create new statements and proofs.",
            "paper-title": "Alchemy: Amplifying Theorem-Proving Capability through Symbolic Mutation",
            "image-path": "flux_paper_image/2410.15748_1729629578.png"
        },

        {
            "startTime": "36:55",
            "arxivId": "2410.15250",
            "arxivLink": "https://arxiv.org/abs/2410.15250",
            "title": "Lost in the Vortex? This AI Learns to Navigate with Sparse Data!",
            "institute": "Westlake University, Microsoft",
            "text": "This research introduces a new method called Physics-Informed Representation (PIR) for learning state representations in multimodal control problems. Unlike previous methods that rely solely on data, PIR incorporates PDE information into the learning process, enabling it to handle sparse and uncertain observations.",
            "paper-title": "Multimodal Policies with Physics-informed Representations",
            "image-path": "flux_paper_image/2410.15250_1729629238.png"
        },

        {
            "startTime": "37:23",
            "arxivId": "2410.14815",
            "arxivLink": "https://arxiv.org/abs/2410.14815",
            "title": "Hindi-Speaking LLMs Get a Big Boost: Researchers Use Synthetic Data to Make Them Smarter!",
            "institute": "Nvidia",
            "text": "This research focuses on adapting multilingual LLMs to low-resource languages using continued pre-training and synthetic corpora. Unlike previous work that primarily relies on supervised fine-tuning, this study emphasizes the importance of expanding the pre-training dataset with synthetic data generated through translation and transliteration.",
            "paper-title": "Adapting Multilingual LLMs to Low-Resource Languages using Continued Pre-training and Synthetic Corpus",
            "image-path": "flux_paper_image/2410.14815_1729628539.png"
        },

        {
            "startTime": "37:44",
            "arxivId": "2410.14715",
            "arxivLink": "https://arxiv.org/abs/2410.14715",
            "title": "Trilobites Get Animated: AI Brings Ancient Creatures to Life!",
            "institute": "Tsinghua University",
            "text": "This research introduces a novel text-to-video framework that automatically learns to refine prompts for generating visually realistic trilobite animations. Unlike previous methods, this approach incorporates a feedback mechanism to enhance the fidelity of the animations by assessing the smoothness of transitions and the accuracy of the trilobite appearance.",
            "paper-title": "Animating the Past: Reconstruct Trilobite via Video Generation",
            "image-path": "flux_paper_image/2410.14715_1729628013.png"
        },

        {
            "startTime": "38:10",
            "arxivId": "2410.15021",
            "arxivLink": "https://arxiv.org/abs/2410.15021",
            "title": "Decoding Text: Bias and Diversity, a Love-Hate Relationship",
            "institute": "Nara Institute of Science and Technology, University of Tokyo",
            "text": "This research delves into the theoretical underpinnings of Minimum Bayes Risk (MBR) decoding, a technique used in text generation. It introduces a novel bias-diversity decomposition framework to analyze the errors in quality estimation during MBR decoding. This framework differs from previous work by providing a theoretical explanation for the observed empirical characteristics of MBR decoding.",
            "paper-title": "Theoretical Aspects of Bias and Diversity in Minimum Bayes Risk Decoding",
            "image-path": "flux_paper_image/2410.15021_1729629108.png"
        },

        {
            "startTime": "38:32",
            "arxivId": "2410.15582",
            "arxivLink": "https://arxiv.org/abs/2410.15582",
            "title": "Skeleton Key to Human Mesh Recovery: A Semi-Analytical Approach",
            "institute": "Peking University",
            "text": "This research proposes a novel semi-analytical approach for human mesh recovery from videos, called ARTS, which leverages disentangled skeletal representations (joint position, bone length, and human motion) to improve both per-frame accuracy and temporal consistency. Unlike previous methods that rely solely on image features, ARTS incorporates skeletons as a primary source of information, leading to more accurate and realistic human mesh reconstructions.",
            "paper-title": "ARTS: Semi-Analytical Regressor using Disentangled Skeletal Representations for Human Mesh Recovery from Videos",
            "image-path": "flux_paper_image/2410.15582_1729629328.png"
        },

        {
            "startTime": "38:57",
            "arxivId": "2410.15762",
            "arxivLink": "https://arxiv.org/abs/2410.15762",
            "title": "Cracking the Code of High-Dimensional Outputs: A Compression-Based Approach to Sparse Regression",
            "institute": "Google, National University of Singapore",
            "text": "This research proposes a two-stage framework for solving Sparse & High-dimensional-Output Regression (SHORE) by incorporating compression in the output space. This approach differs from previous work by addressing the computational scalability and interpretability challenges of high-dimensional outputs in multi-output regression (MOR) tasks.",
            "paper-title": "Solving Sparse \\&High-Dimensional-Output Regression via Compression",
            "image-path": "flux_paper_image/2410.15762_1729629138.png"
        },

        {
            "startTime": "39:24",
            "arxivId": "2410.15326",
            "arxivLink": "https://arxiv.org/abs/2410.15326",
            "title": "LLMs: When They Don't Know, They Don't Know (and We Can Tell!)",
            "institute": "Peking University, Beijing Institute of Technology",
            "text": "This research goes beyond simply identifying uncertainty in LLMs. It categorizes different types of uncertainty and explores how to estimate them using various theoretical frameworks, including Bayesian inference, information theory, and ensemble strategies. This approach provides a more comprehensive understanding of uncertainty in LLMs compared to previous work that often relied on heuristic methods.",
            "paper-title": "A Survey of Uncertainty Estimation in LLMs: Theory Meets Practice",
            "image-path": "flux_paper_image/2410.15326_1729627806.png"
        },

        {
            "startTime": "39:49",
            "arxivId": "2410.14789",
            "arxivLink": "https://arxiv.org/abs/2410.14789",
            "title": "Privacy-Preserving Propensity Scores: Balancing Covariates Without Breaking the Bank",
            "institute": "Yale School of Public Health, Purdue University",
            "text": "This research introduces a new two-stage algorithm for estimating causal effects from observational data while ensuring differential privacy. Unlike previous work, this method incorporates covariate balancing constraints, addressing the issue of model misspecification in propensity score analysis.",
            "paper-title": "Differentially Private Covariate Balancing Causal Inference",
            "image-path": "flux_paper_image/2410.14789_1729628730.png"
        },

        {
            "startTime": "40:08",
            "arxivId": "2410.15013",
            "arxivLink": "https://arxiv.org/abs/2410.15013",
            "title": "Predicting Transit Ridership: A Deep Learning Model That's Got Your Back (and Your Bus)",
            "institute": "University of Toronto",
            "text": "This research introduces DST-TransitNet, a hybrid deep learning model that dynamically integrates spatial and temporal features for network-wide station-level ridership prediction. Unlike previous models, DST-TransitNet considers the changing correlations between stations throughout the day, making it more adaptable to real-world scenarios.",
            "paper-title": "DST-TransitNet: A Dynamic Spatio-Temporal Deep Learning Model for Scalable and Efficient Network-Wide Prediction of Station-Level Transit Ridership",
            "image-path": "flux_paper_image/2410.15013_1729629102.png"
        },

        {
            "startTime": "40:32",
            "arxivId": "2410.15016",
            "arxivLink": "https://arxiv.org/abs/2410.15016",
            "title": "Social Media Whispers: Unlocking Transit Secrets with AI",
            "institute": "University of Toronto",
            "text": "This research proposes a novel approach to extracting and analyzing transit-related information from social media using Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG), which differs from previous work that relied on traditional NLP techniques like TF-IDF.",
            "paper-title": "Transit Pulse: Utilizing Social Media as a Source for Customer Feedback and Information Extraction with Large Language Model",
            "image-path": "flux_paper_image/2410.15016_1729627626.png"
        },

        {
            "startTime": "40:57",
            "arxivId": "2410.14992",
            "arxivLink": "https://arxiv.org/abs/2410.14992",
            "title": "Learning Infinite-Horizon MDPs: A Span-tastic New Algorithm!",
            "institute": "Korea Advanced Institute of Science and Technology, University of Michigan",
            "text": "This paper proposes a new algorithm for learning infinite-horizon average-reward linear mixture Markov decision processes (MDPs) that achieves a nearly minimax optimal regret upper bound. The algorithm uses a novel value iteration scheme with clipping to control the span of the value functions, which is crucial for achieving a bounded regret for MDPs of bounded span. This approach is different from previous work that focused on communicating MDPs, which have a bounded diameter but may have an arbitrarily large span.",
            "paper-title": "Learning Infinite-Horizon Average-Reward Linear Mixture MDPs of Bounded Span",
            "image-path": "flux_paper_image/2410.14992_1729629664.png"
        },

        {
            "startTime": "41:23",
            "arxivId": "2410.14812",
            "arxivLink": "https://arxiv.org/abs/2410.14812",
            "title": "Unmasking the Hidden Language: How to Isolate the True Impact of Words",
            "institute": "Carnegie Mellon University",
            "text": "This research introduces a formal framework for estimating the isolated causal effect of a specific language attribute on an outcome, accounting for the influence of surrounding text. It differs from previous work by explicitly defining and approximating non-focal language, allowing for a more precise understanding of the impact of individual language choices.",
            "paper-title": "Isolated Causal Effects of Natural Language",
            "image-path": "flux_paper_image/2410.14812_1729629469.png"
        },

        {
            "startTime": "41:45",
            "arxivId": "2410.15373",
            "arxivLink": "https://arxiv.org/abs/2410.15373",
            "title": "Dynamic Objects? No Problem! New VINS Framework Handles Abruptly Moving Things",
            "institute": "MIT, Korea Advanced Institute of Science and Technology",
            "text": "This research introduces a new visual-inertial navigation system (VINS) framework called DynaVINS++ that specifically addresses the challenges of abruptly dynamic objects, which are objects that suddenly start moving. Unlike previous methods that focus on feature association, DynaVINS++ tackles the issue at the state estimation level, preventing errors from propagating into the IMU bias terms.",
            "paper-title": "DynaVINS++: Robust Visual-Inertial State Estimator in Dynamic Environments by Adaptive Truncated Least Squares and Stable State Recovery",
            "image-path": "flux_paper_image/2410.15373_1729629683.png"
        },

        {
            "startTime": "42:13",
            "arxivId": "2410.15665",
            "arxivLink": "https://arxiv.org/abs/2410.15665",
            "title": "AI Gets a Memory Makeover: Long-Term Learning for Smarter Bots",
            "institute": "Shanda Group, Tianqiao and Chrissy Chen Institute, Princeton University...",
            "text": "This research proposes a new approach to AI self-evolution by incorporating long-term memory (LTM) into models. Unlike previous work that focuses on training models on ever-larger datasets, this paper emphasizes the importance of enabling models to learn and adapt from limited data or interactions during inference.",
            "paper-title": "Long Term Memory: The Foundation of AI Self-Evolution",
            "image-path": "flux_paper_image/2410.15665_1729627916.png"
        },

        {
            "startTime": "42:41",
            "arxivId": "2410.15780",
            "arxivLink": "https://arxiv.org/abs/2410.15780",
            "title": "Maps Tell Tales: AI Unlocks the Secrets of Historical Maps",
            "institute": "ETH Zurich",
            "text": "This research proposes a novel system for automatically generating captions and stories from historical maps, addressing the limitations of existing image captioning methods in understanding and interpreting map-specific information. The system utilizes fine-tuned CLIP models for keyword captioning and GPT for story generation, incorporating a decision tree architecture to tailor captions to different map types.",
            "paper-title": "An Efficient System for Automatic Map Storytelling -- A Case Study on Historical Maps",
            "image-path": "flux_paper_image/2410.15780_1729628262.png"
        },

        {
            "startTime": "43:01",
            "arxivId": "2410.15851",
            "arxivLink": "https://arxiv.org/abs/2410.15851",
            "title": "Heart Rate from Your Face: New Tech Tracks Your Pulse Without Touching You!",
            "institute": "IIIT-Hyderabad, University of Illinois at Urbana-Champaign, University of Chicago Medicine",
            "text": "This research proposes a new method for selecting the region of interest (ROI) in remote photoplethysmography (rPPG) using 3D facial landmarks and head yaw angle. This approach is more robust to head movement and lighting changes than previous methods that rely on tracking the ROI.",
            "paper-title": "R2I-rPPG: A Robust Region of Interest Selection Method for Remote Photoplethysmography to Extract Heart Rate",
            "image-path": "flux_paper_image/2410.15851_1729628809.png"
        },

        {
            "startTime": "43:24",
            "arxivId": "2410.15299",
            "arxivLink": "https://arxiv.org/abs/2410.15299",
            "title": "ChatGPT: Poet or Poser? A Deep Dive into AI's Poetic Style",
            "institute": "University of Washington",
            "text": "This research goes beyond simply evaluating the quality of ChatGPT-generated poetry. It focuses on quantifying and describing key patterns in the poetry produced, analyzing the model's stylistic tendencies across different forms and styles.",
            "paper-title": "Does ChatGPT Have a Poetic Style?",
            "image-path": "flux_paper_image/2410.15299_1729629176.png"
        },

        {
            "startTime": "43:46",
            "arxivId": "2410.15430",
            "arxivLink": "https://arxiv.org/abs/2410.15430",
            "title": "Boosting Your Vision: How a Memory Bank Makes AI See Better",
            "institute": "Tsinghua University, Shenzhen University, Harbin Institute of Technology...",
            "text": "This research proposes BoostAdapter, a test-time adaptation method that combines the strengths of training-required and training-free approaches. Unlike previous training-free methods, BoostAdapter incorporates \"boosting samples\" generated from regional bootstrapping of the test sample itself, enhancing its ability to extract fine-grained information.",
            "paper-title": "BoostAdapter: Improving Test-Time Adaptation via Regional Bootstrapping",
            "image-path": "flux_paper_image/2410.15430_1729629445.png"
        },

        {
            "startTime": "44:10",
            "arxivId": "2410.14833",
            "arxivLink": "https://arxiv.org/abs/2410.14833",
            "title": "X-Ray Vision: AI Cracks the Code on Bone Fractures!",
            "institute": "Stamford University Bangladesh",
            "text": "This research utilizes a novel approach by combining transfer learning with an attention-based mechanism, specifically the BAM module, to enhance the accuracy of bone fracture classification from X-ray images. This differs from previous work that primarily focused on using pre-trained models or ensemble approaches.",
            "paper-title": "A novel approach towards the classification of Bone Fracture from Musculoskeletal Radiography images using Attention Based Transfer Learning",
            "image-path": "flux_paper_image/2410.14833_1729629412.png"
        },

        {
            "startTime": "44:32",
            "arxivId": "2410.16106",
            "arxivLink": "https://arxiv.org/abs/2410.16106",
            "title": "TD Learning Gets a Confidence Boost: New Research Delivers Sharper Statistical Inference",
            "institute": "The Voleon Group, The Chinese University of Hong Kong, The Wharton School...",
            "text": "This paper improves upon existing results for TD learning with linear function approximation by deriving a novel high-dimensional probability convergence guarantee, refined Berry-Esseen bounds, and a plug-in estimator for the asymptotic covariance matrix.",
            "paper-title": "Statistical Inference for Temporal Difference Learning with Linear Function Approximation",
            "image-path": "flux_paper_image/2410.16106_1729627418.png"
        },

        {
            "startTime": "45:00",
            "arxivId": "2410.15777",
            "arxivLink": "https://arxiv.org/abs/2410.15777",
            "title": "BNNs: Learning to Act Like GPs, One Activation at a Time!",
            "institute": "Jagiellonian University, Mila Universit\u00e9 de Montr\u00b4eal",
            "text": "This research explores a new approach to transferring functional priors from Gaussian Processes (GPs) to Bayesian Neural Networks (BNNs). Unlike previous methods that focused on learning priors on weights and biases, this study proposes learning activations in addition to priors, enabling high-fidelity function-space priors even in shallow BNNs.",
            "paper-title": "High-Fidelity Transfer of Functional Priors for Wide Bayesian Neural Networks by Learning Activations",
            "image-path": "flux_paper_image/2410.15777_1729628437.png"
        },

        {
            "startTime": "45:24",
            "arxivId": "2410.14730",
            "arxivLink": "https://arxiv.org/abs/2410.14730",
            "title": "Diffusion Models: Power Iteration's Secret Twin?",
            "institute": "Tel Aviv University, Google",
            "text": "This paper analyzes the generation process of diffusion models as a \"correlation machine,\" focusing on the denoiser's behavior throughout the process, unlike previous work that primarily focused on the final generated data. It connects the theory of diffusion models to the spiked covariance model, allowing for analytical expressions of the denoiser's dependence on noise level and training data.",
            "paper-title": "On the Relation Between Linear Diffusion and Power Iteration",
            "image-path": "flux_paper_image/2410.14730_1729628722.png"
        },

        {
            "startTime": "45:50",
            "arxivId": "2410.16073",
            "arxivLink": "https://arxiv.org/abs/2410.16073",
            "title": "Regularization: The Secret Weapon for Robust AI?",
            "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne, New York University, \u00c9cole Normale Sup\u00e9rieure...",
            "text": "This research delves into the impact of different regularization norms on the performance of adversarial training, particularly in high-dimensional settings. Unlike previous work that primarily focused on \u21132 regularization, this study explores a wider range of norms, including Mahalanobis norms, and provides a more comprehensive analysis of their effects on robustness and accuracy.",
            "paper-title": "On the Geometry of Regularization in Adversarial Training: High-Dimensional Asymptotics and Generalization Bounds",
            "image-path": "flux_paper_image/2410.16073_1729627461.png"
        },

        {
            "startTime": "46:13",
            "arxivId": "2410.14927",
            "arxivLink": "https://arxiv.org/abs/2410.14927",
            "title": "Stock Trading: Two Brains Are Better Than One (and More Profitable Too!)",
            "institute": "MIT",
            "text": "This research introduces a Hierarchical Reinforced Trader (HRT) agent that uses a bi-level approach to stock trading. Unlike previous work that focuses on a single level of decision-making, HRT separates the trading process into two distinct but interconnected levels: a High-Level Controller (HLC) for strategic stock selection and a Low-Level Controller (LLC) for optimizing trade execution.",
            "paper-title": "Hierarchical Reinforced Trader (HRT): A Bi-Level Approach for Optimizing Stock Selection and Execution",
            "image-path": "flux_paper_image/2410.14927_1729628851.png"
        },

        {
            "startTime": "46:39",
            "arxivId": "2410.15770",
            "arxivLink": "https://arxiv.org/abs/2410.15770",
            "title": "AI Maps: From Google Maps to Your Own Custom Creations!",
            "institute": "ETH Zurich",
            "text": "This research proposes a roadmap for developing generative mapping systems (GMSs) that use AI to create maps, focusing on the challenges and opportunities of using generative AI for map customization and multi-modal data processing. It distinguishes itself from prior research by focusing on the technical aspects of GMS development rather than ethical concerns or user perspectives.",
            "paper-title": "A roadmap for generative mapping: unlocking the power of generative AI for map-making",
            "image-path": "flux_paper_image/2410.15770_1729628766.png"
        },

        {
            "startTime": "46:58",
            "arxivId": "2410.15059",
            "arxivLink": "https://arxiv.org/abs/2410.15059",
            "title": "Algorithms on Autopilot: Deep Equilibrium Solves Problems Without Counting Steps",
            "institute": "University of Cambridge",
            "text": "This research explores a new approach to Neural Algorithmic Reasoning (NAR) by leveraging the equilibrium property of algorithms. Unlike previous methods that align neural networks with each step of an algorithm, this approach directly finds the equilibrium point of the network's equation, eliminating the need for information about the number of steps during both training and testing.",
            "paper-title": "Deep Equilibrium Algorithmic Reasoning",
            "image-path": "flux_paper_image/2410.15059_1729629244.png"
        },

        {
            "startTime": "47:21",
            "arxivId": "2410.15637",
            "arxivLink": "https://arxiv.org/abs/2410.15637",
            "title": "Heavy-tailed Noise? No Problem! Nonlinear SGD Gets a Symmetry Boost.",
            "institute": "CMU, University of Novi Sad",
            "text": "This research explores the behavior of nonlinear stochastic gradient descent (SGD) methods in the presence of heavy-tailed noise, but unlike previous work, it leverages the often-observed symmetry of the noise to achieve sharper convergence rates.",
            "paper-title": "Large Deviations and Improved Mean-squared Error Rates of Nonlinear SGD: Heavy-tailed Noise and Power of Symmetry",
            "image-path": "flux_paper_image/2410.15637_1729628819.png"
        },

        {
            "startTime": "47:45",
            "arxivId": "2410.15492",
            "arxivLink": "https://arxiv.org/abs/2410.15492",
            "title": "Can AI Learn to Juggle Memory?",
            "institute": "University of Texas at Austin",
            "text": "This research explores the application of reinforcement learning (RL) to dynamic memory allocation, a domain not previously explored. The paper proposes a framework where an RL agent learns from system interactions to improve memory management, potentially surpassing traditional allocation strategies.",
            "paper-title": "Reinforcement Learning for Dynamic Memory Allocation",
            "image-path": "flux_paper_image/2410.15492_1729629008.png"
        },

        {
            "startTime": "48:08",
            "arxivId": "2410.14752",
            "arxivLink": "https://arxiv.org/abs/2410.14752",
            "title": "LLMs Take a Time Series Test: Can They Pass the Pattern Recognition Quiz?",
            "institute": "CMU",
            "text": "This research introduces TimeSeriesExam, a novel benchmark for evaluating LLMs' understanding of time series data. Unlike previous benchmarks, TimeSeriesExam focuses on assessing core time series concepts rather than domain-specific knowledge. It also uses procedurally generated questions and an iterative refinement process to ensure the questions are well-balanced and effective in discriminating between models with varying abilities.",
            "paper-title": "TimeSeriesExam: A time series understanding exam",
            "image-path": "flux_paper_image/2410.14752_1729628251.png"
        },

        {
            "startTime": "48:33",
            "arxivId": "2410.15201",
            "arxivLink": "https://arxiv.org/abs/2410.15201",
            "title": "Rolling Penny, Rolling Research: Learning the Dynamics of a Nonholonomic System",
            "institute": "University of Michigan",
            "text": "This research focuses on learning the dynamics of a nonholonomic system, specifically the rolling penny, by leveraging the nonholonomic momentum equation. Unlike previous work that focused on learning the dynamics of symmetric systems, this paper tackles the challenge of learning both the dynamics and the constraints of a system with nonholonomic constraints.",
            "paper-title": "Learning the Rolling Penny Dynamics",
            "image-path": "flux_paper_image/2410.15201_1729629093.png"
        },

        {
            "startTime": "48:57",
            "arxivId": "2410.15501",
            "arxivLink": "https://arxiv.org/abs/2410.15501",
            "title": "Quantum Data: Can We Predict It All, Even If We're Nosy?",
            "institute": "Caltech",
            "text": "This research explores the impact of adaptively choosing observables in quantum systems, a departure from the traditional assumption of non-adaptive selection in shadow tomography.",
            "paper-title": "Predicting adaptively chosen observables in quantum systems",
            "image-path": "flux_paper_image/2410.15501_1729628876.png"
        },

        {
            "startTime": "49:20",
            "arxivId": "2410.14748",
            "arxivLink": "https://arxiv.org/abs/2410.14748",
            "title": "Code Summarization: When LLMs Get Lost in Translation",
            "institute": "IBM, University of Texas at Austin, Indian Institute of Technology Bombay",
            "text": "This research introduces a novel dataset specifically for studying hallucination in code summarization, a task that has received less attention than code generation. The paper also proposes a framework, Entity Tracing Framework (ETF), that focuses on validating the correctness of generated summaries by tracing entities from the summary to the code.",
            "paper-title": "ETF: An Entity Tracing Framework for Hallucination Detection in Code Summaries",
            "image-path": "flux_paper_image/2410.14748_1729628136.png"
        },

        {
            "startTime": "49:43",
            "arxivId": "2410.15271",
            "arxivLink": "https://arxiv.org/abs/2410.15271",
            "title": "Battery Health Check: DRT Decodes Battery Secrets for Longer Life!",
            "institute": "Stanford University",
            "text": "This research uses the Distribution of Relaxation Times (DRT) technique to analyze electrochemical impedance spectroscopy (EIS) data, which provides a more detailed understanding of battery degradation compared to previous methods that relied on specific frequency points.",
            "paper-title": "Onboard Health Estimation using Distribution of Relaxation Times for Lithium-ion Batteries",
            "image-path": "flux_paper_image/2410.15271_1729627962.png"
        },

        {
            "startTime": "50:07",
            "arxivId": "2410.15489",
            "arxivLink": "https://arxiv.org/abs/2410.15489",
            "title": "AI Robots: From Chatbots to Chaos? Safety Scorecards for Generative AI in Autonomous Machines",
            "institute": "Harvard University",
            "text": "This research focuses on the unique safety challenges of integrating generative AI models into autonomous machines, going beyond the virtual domain and exploring the physical implications. It proposes a safety scorecard framework for assessing and communicating these risks.",
            "paper-title": "Generative AI Agents in Autonomous Machines: A Safety Perspective",
            "image-path": "flux_paper_image/2410.15489_1729629571.png"
        },

        {
            "startTime": "50:33",
            "arxivId": "2410.14753",
            "arxivLink": "https://arxiv.org/abs/2410.14753",
            "title": "LLMs: Learning New Tricks Without Forgetting the Old Ones!",
            "institute": "IBM Research",
            "text": "This research explores how to train large language models (LLMs) on new datasets without losing their ability to perform well on previously learned tasks. It compares different methods for sequential training, including full fine-tuning, parameter-efficient fine-tuning (PEFT) with LoRA, and model merging techniques.",
            "paper-title": "Collaboratively adding new knowledge to an LLM",
            "image-path": "flux_paper_image/2410.14753_1729628583.png"
        },

        {
            "startTime": "50:50",
            "arxivId": "2410.15236",
            "arxivLink": "https://arxiv.org/abs/2410.15236",
            "title": "LLMs: Jailbreak-Proof? Not So Fast! New Research Uncovers Sneaky Attacks",
            "institute": "Purdue University, Kyoto University, National Taiwan Normal University...",
            "text": "This research goes beyond traditional prompt-based attacks, exploring model-based and multimodal jailbreaking techniques. It also delves into the unique challenges of multilingual LLMs and their vulnerability to attacks exploiting linguistic disparities in safety training data.",
            "paper-title": "Jailbreaking and Mitigation of Vulnerabilities in Large Language Models",
            "image-path": "flux_paper_image/2410.15236_1729629396.png"
        },

        {
            "startTime": "51:19",
            "arxivId": "2410.14932",
            "arxivLink": "https://arxiv.org/abs/2410.14932",
            "title": "Can AI Predict Gray Swan Hurricanes? Not So Fast!",
            "institute": "University of Chicago",
            "text": "This research investigates the ability of AI weather models to predict rare, extreme weather events, specifically Category 5 hurricanes, that are not present in the training data. The study trains different versions of the FourCastNet model on datasets with varying levels of hurricane data and then tests their performance on real-world Category 5 hurricanes.",
            "paper-title": "Can AI weather models predict out-of-distribution gray swan tropical cyclones?",
            "image-path": "flux_paper_image/2410.14932_1729628348.png"
        },

        {
            "startTime": "51:45",
            "arxivId": "2410.15283",
            "arxivLink": "https://arxiv.org/abs/2410.15283",
            "title": "TRIZ-Powered AI Predicts Building Energy Use: It's Like a Wolf Pack Hunting for Savings!",
            "institute": "Purdue University, University of Pennsylvania, Georgia Institute of Technology...",
            "text": "This research combines TRIZ, a systematic innovation methodology, with a hybrid deep learning model (GWO-SARIMA-LSTM) to improve building energy consumption prediction accuracy. This approach differs from previous work by incorporating TRIZ's problem-solving framework into the model design, enhancing its ability to address complex energy consumption patterns.",
            "paper-title": "TRIZ Method for Urban Building Energy Optimization: GWO-SARIMA-LSTM Forecasting model",
            "image-path": "flux_paper_image/2410.15283_1729628914.png"
        },

        {
            "startTime": "52:09",
            "arxivId": "2410.14916",
            "arxivLink": "https://arxiv.org/abs/2410.14916",
            "title": "Fair Play: Robots Learn to Share the Road (and Goals)",
            "institute": "MIT",
            "text": "This research introduces a new method for training multi-agent reinforcement learning (MARL) models to be fair in their goal assignments. Unlike previous work that focuses on efficiency alone, this paper considers fairness as a key objective, ensuring that agents don't end up with disproportionately difficult tasks.",
            "paper-title": "Cooperation and Fairness in Multi-Agent Reinforcement Learning",
            "image-path": "flux_paper_image/2410.14916_1729627906.png"
        },

        {
            "startTime": "52:27",
            "arxivId": "2410.15161",
            "arxivLink": "https://arxiv.org/abs/2410.15161",
            "title": "Brain-Powered Typing: AI Makes P300 Spell Faster!",
            "institute": "University of Illinois at Urbana Champaign, University of Washington, UCLA...",
            "text": "This research integrates large language models (LLMs) into the P300 speller, a brain-computer interface (BCI) used by ALS patients for communication. Unlike previous work, this study uses LLMs to predict words based on context, improving typing speed and accuracy.",
            "paper-title": "Evaluation Of P300 Speller Performance Using Large Language Models Along With Cross-Subject Training",
            "image-path": "flux_paper_image/2410.15161_1729629316.png"
        },

        {
            "startTime": "52:56",
            "arxivId": "2410.14712",
            "arxivLink": "https://arxiv.org/abs/2410.14712",
            "title": "Abstracting Away Agent Complexity: A Bisimulation-Based Approach",
            "institute": "University of Oxford, York University",
            "text": "This research introduces a framework for abstracting agent action theories using bisimulation relations, which is a novel approach compared to previous work that primarily focused on syntactic mappings or hierarchical planning.",
            "paper-title": "Abstracting Situation Calculus Action Theories",
            "image-path": "flux_paper_image/2410.14712_1729628576.png"
        },

        {
            "startTime": "53:24",
            "arxivId": "2410.16107",
            "arxivLink": "https://arxiv.org/abs/2410.16107",
            "title": "LLMs: Writing Like Humans? Not So Fast!",
            "institute": "Carnegie Mellon University, New Jersey Institute of Technology",
            "text": "This research goes beyond previous studies that focused on surface features like word choice and punctuation. It delves into the rhetorical styles of LLMs, analyzing grammatical and lexical features to identify systematic differences between human and LLM writing.",
            "paper-title": "Do LLMs write like humans? Variation in grammatical and rhetorical styles",
            "image-path": "flux_paper_image/2410.16107_1729629418.png"
        },

        {
            "startTime": "53:44",
            "arxivId": "2410.16116",
            "arxivLink": "https://arxiv.org/abs/2410.16116",
            "title": "Solar Flare Forecasting: Sun's UV Rays are the New Hotness!",
            "institute": "University of Rome Tor Vergata, University of Coimbra, University of Rome La Sapienza...",
            "text": "This research compares the predictive power of chromospheric and coronal UV and EUV emissions with photospheric magnetograms for solar flare forecasting. It finds that individual EUV wavelengths can be as good or better than magnetograms, and that combining data from different atmospheric layers improves predictions.",
            "paper-title": "Multimodal Flare Forecasting with Deep Learning",
            "image-path": "flux_paper_image/2410.16116_1729628676.png"
        },

        {
            "startTime": "54:07",
            "arxivId": "2410.15012",
            "arxivLink": "https://arxiv.org/abs/2410.15012",
            "title": "AI Pathologists: Explaining Gleason Grading with Soft Labels",
            "institute": "German Cancer Research Center, Medical Faculty of University Heidelberg, RWTH Aachen University...",
            "text": "This research introduces a novel dataset of 1,015 tissue microarray core images annotated by 54 pathologists, providing detailed localized pattern descriptions for Gleason grading. The study also develops an inherently explainable AI system based on a U-Net architecture that leverages pathologists' terminology, circumventing post-hoc explainability methods.",
            "paper-title": "Pathologist-like explainable AI for interpretable Gleason grading in prostate cancer",
            "image-path": "flux_paper_image/2410.15012_1729629522.png"
        },

        {
            "startTime": "54:36",
            "arxivId": "2410.15302",
            "arxivLink": "https://arxiv.org/abs/2410.15302",
            "title": "Carbon Storage: A Deep Dive into Uncertainty with a Playful Twist!",
            "institute": "Stanford University",
            "text": "This research introduces a hierarchical data assimilation framework for geological carbon storage that treats hyperparameters as uncertain variables. Unlike traditional approaches that assume fixed hyperparameters, this method uses a likelihood-free inference algorithm (SMC-ABC) to estimate hyperparameters and then applies ESMDA to estimate grid-block permeability.",
            "paper-title": "Likelihood-Free Inference and Hierarchical Data Assimilation for Geological Carbon Storage",
            "image-path": "flux_paper_image/2410.15302_1729627517.png"
        },

        {
            "startTime": "55:01",
            "arxivId": "2410.15528",
            "arxivLink": "https://arxiv.org/abs/2410.15528",
            "title": "AI Scribes: Sporo Health's AI Beats GPT-4o mini in a Documentation Showdown!",
            "institute": "SporoHealth, Yale School of Medicine",
            "text": "This study directly compares the performance of Sporo Health's AI Scribe, a multi-agent system leveraging fine-tuned medical LLMs, with OpenAI's GPT-4o mini on multiple performance metrics. This approach provides a more direct comparison of the two systems' capabilities in clinical documentation.",
            "paper-title": "Improving Clinical Documentation with AI: A Comparative Study of Sporo AI Scribe and GPT-4o mini",
            "image-path": "flux_paper_image/2410.15528_1729629763.png"
        },

        {
            "startTime": "55:23",
            "arxivId": "2410.15721",
            "arxivLink": "https://arxiv.org/abs/2410.15721",
            "title": "Predicting Signals on Graphs: A New Way to Transport Data with Optimal Transport",
            "institute": "Safran Tech, Ecole Polytechnique, Institut Polytechnique de Paris...",
            "text": "This research proposes a novel approach for Gaussian process regression where inputs are graphs with continuous node attributes and outputs are signals defined on the nodes of the associated inputs. The key innovation lies in using optimal transport to transfer signals to a common reference measure, enabling dimension reduction and prediction with uncertainty quantification.",
            "paper-title": "Learning signals defined on graphs with optimal transport and Gaussian process regression",
            "image-path": "flux_paper_image/2410.15721_1729628702.png"
        },

        {
            "startTime": "55:45",
            "arxivId": "2410.15108",
            "arxivLink": "https://arxiv.org/abs/2410.15108",
            "title": "Brain Shape Predicts Smarts: A Machine Learning Study Reveals the Importance of White Matter Wiggles",
            "institute": "Harvard University",
            "text": "This research explores the predictive power of white matter fiber cluster shape measures for individual cognitive performance, going beyond traditional microstructure and connectivity measures.",
            "paper-title": "The shape of the brain's connections is predictive of cognitive performance: an explainable machine learning study",
            "image-path": "flux_paper_image/2410.15108_1729628856.png"
        }
    ],
    "stats": {
        "num_pick": 133,
        "num_total": 654,
    },
    "audio": "https://d2irtorupa9e8g.cloudfront.net/daily_podcast/202410221405_audio.mp3"
}
